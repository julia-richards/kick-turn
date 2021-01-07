from .db import db
from ..models.problem import Problem


class Plan(db.Model):
    __tablename__ = 'plans'
    id = db.Column(db.Integer, primary_key=True),
    date = db.Coumn(db.Date, nullable=false),
    avy_observations = db.Column(db.String(500)),
    snowpack_summary = db.Column(db.String(500)),
    temp_now = db.Column(db.Integer),
    wind_sp_now = db.Column(db.Integer),
    wind_dir_now = db.Column(db.String(50)),
    sky_cover_now = db.Column(db.String(50)),
    precip_now = db.Column(db.String(150)),
    temp_fore = db.Column(db.Integer),
    wind_sp_fore = db.Column(db.Integer),
    wind_dir_fore = db.Column(db.String(50)),
    sky_cover_fore = db.Column(db.String(50)),
    precip_fore = db.Column(db.String(150)),
    weather_contribution = db.Column(db.String(255)),
    weather_summary = db.Column(db.String(255)),
    ates = db.Column(db.String(50)),
    terrain_avoiding = db.Column(db.String(150)),
    obs_fore_summary = db.Column(db.String(255)),
    mindset = db.Column(db.String(150)),
    tour_plan = db.Column(db.String(1000)),
    emergency_plan = db.Column(db.String(1000)),
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    route_id = db.Column(db.Integer, db.ForeignKey('route.id'), nullable=False),
    avy_prob_id = db.relationship('Problem', backref='plan')
