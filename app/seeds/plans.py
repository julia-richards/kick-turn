from app.models import db, Plan

# def seed_plans():


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_plans():
    # db.session.execute('TRUNCATE plan_problems CASCADE')
    db.session.execute('TRUNCATE plans, plan_problems;')
    db.session.commit()
