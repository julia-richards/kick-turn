from .db import db
from ..models.problem import Problem

plan_problems = db.Table(
    "plan_problems",
    db.Model.metadata,
    db.Column("plan_id", db.Integer, db.ForeignKey("plans.id", ondelete="CASCADE"), primary_key=True),
    db.Column("problem_id", db.Integer, db.ForeignKey("problems.id", ondelete="CASCADE"), primary_key=True)
)

class Plan(db.Model):
    __tablename__ = 'plans'

    id = db.Column(db.Integer, primary_key=True, unique=True)
    date = db.Column(db.Date, nullable=False)
    avy_observations = db.Column(db.String(500))
    snowpack_summary = db.Column(db.String(500))
    temp_now = db.Column(db.Integer)
    wind_sp_now = db.Column(db.Integer)
    wind_dir_now = db.Column(db.String(50))
    sky_cover_now = db.Column(db.String(50))
    precip_now = db.Column(db.String(150))
    temp_fore = db.Column(db.Integer)
    wind_sp_fore = db.Column(db.Integer)
    wind_dir_fore = db.Column(db.String(50))
    sky_cover_fore = db.Column(db.String(50))
    precip_fore = db.Column(db.String(150))
    weather_contribution = db.Column(db.String(255))
    weather_summary = db.Column(db.String(255))
    ates = db.Column(db.String(50))
    terrain_avoiding = db.Column(db.String(150))
    obs_fore_summary = db.Column(db.String(255))
    mindset = db.Column(db.String(150))
    tour_plan = db.Column(db.String(1000))
    emergency_plan = db.Column(db.String(1000))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, unique=True)
    route_id = db.Column(db.Integer, db.ForeignKey('routes.id'), nullable=False, unique=True)
    problems = db.relationship("Problem", secondary=plan_problems, back_populates="plans", cascade="all")