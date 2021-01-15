from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io', avy_edu='Pro 1',
                password='password')

    friend1 = User(username='Friend1', email='friend1@aa.io', avy_edu='Avy 2',
                password='password')

    friend2 = User(username='Friend2', email='friend2@aa.io', avy_edu='Avy 1',
                password='password')

    db.session.add(demo)
    db.session.add(friend1)
    db.session.add(friend2)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users, user_plans CASCADE;')
    db.session.commit()
