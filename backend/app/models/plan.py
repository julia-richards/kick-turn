from .db import db
from sqlalchemy.orm import relationship
# from ..models.problem import Problem

# TODO: change to one to many relationship
plan_problems = db.Table(
    "plan_problems",
    db.Model.metadata,
    db.Column("plan_id", db.Integer, db.ForeignKey("plans.id", ondelete="CASCADE"), primary_key=True),
    db.Column("problem_id", db.Integer, db.ForeignKey("problems.id", ondelete="CASCADE"), primary_key=True)
)

class Plan(db.Model):
    __tablename__ = 'plans'

    id = db.Column(db.Integer, primary_key=True)
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
    route_id = db.Column(db.Integer, db.ForeignKey('routes.id'))
    avy_problems = db.relationship("Problem", secondary=plan_problems, back_populates="plans")



    def to_dict(self):
        return {
           "id": self.id,
           "date": self.date,
           "avy_observations": self.avy_observations,
           "snowpack_summary": self.snowpack_summary,
           "temp_now": self.temp_now,
           "wind_sp_now": self.wind_sp_now,
           "wind_dir_now": self.wind_dir_now,
           "sky_cover_now": self.sky_cover_now,
           "precip_now": self.precip_now,
           "temp_fore": self.temp_fore,
           "wind_sp_fore": self.wind_sp_fore,
           "wind_dir_fore": self.wind_dir_fore,
           "sky_cover_fore": self.sky_cover_fore,
           "precip_fore": self.precip_fore,
           "weather_contribution": self.weather_contribution,
           "weather_summary": self.weather_summary,
           "ates": self.ates,
           "terrain_avoiding": self.terrain_avoiding,
           "obs_fore_summary": self.obs_fore_summary,
           "mindset": self.mindset,
           "tour_plan": self.tour_plan,
           "emergency_plan": self.emergency_plan,
           "route_id": self.route_id,
           "avy_problems": self.avy_problems
            }