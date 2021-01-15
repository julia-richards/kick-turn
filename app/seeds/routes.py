from app.models import db, Route

# def seed_routes():


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_routes():
    db.session.execute('TRUNCATE routes, plans, plan_problems CASCADE;')
    db.session.commit()
