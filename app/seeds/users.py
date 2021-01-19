from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io', avy_edu='Pro 1',
                password='password')

    sylvia = User(username='Sylvia', email='sylvia@aa.io', avy_edu='Avy 2',
                password='password')

    ian = User(username='Ian', email='ian@aa.io', avy_edu='Avy Rescue',
                password='password')

    letty = User(username='Letty', email='letty@aa.io', avy_edu='Avy 1',
                password='password')

    omar = User(username='Omar', email='omar@aa.io', avy_edu='Avy 2',
                password='password')

    ella = User(username='Ella', email='ella@aa.io', avy_edu='Pro 2',
                password='password')

    db.session.add(demo)
    db.session.add(sylvia)
    db.session.add(ian)
    db.session.add(letty)
    db.session.add(omar)
    db.session.add(ella)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users, user_plans CASCADE;')
    db.session.commit()
