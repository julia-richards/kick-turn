from app.models import db, ProblemType

def seed_problem_types():
    ld = ProblemType(name='Loose Dry')
    ss = ProblemType(name='Storm Slab')
    wind_s = ProblemType(name='Wind Slab')
    ps = ProblemType(name='Persistant Slab')
    dps = ProblemType(name='Deep Persistant Slab')
    wl = ProblemType(name='Loose Wet')
    wet_s = ProblemType(name='Wet Slab')
    c_fall = ProblemType(name='Cornice Fall')
    g = ProblemType(name='Glide')

    db.session.add(ld)
    db.session.add(ss)
    db.session.add(wind_s)
    db.session.add(ps)
    db.session.add(dps)
    db.session.add(wl)
    db.session.add(wet_s)
    db.session.add(c_fall)
    db.session.add(g)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_problem_types():
    db.session.execute('TRUNCATE problem_types CASCADE;')
    db.session.commit()
