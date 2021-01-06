from .db import db
from ..models.plan import Plan


class Problem(db.Model):
    __tablename__ = 'problems'

    id = db.Column(db.Integer, primary_key=True),
    aspect = db.Column(db.String(50), nullable=False),
    elevation = db.Column(db.Integer),
    danger_rating = db.Column(db.String(50), nullable=False),
    size = db.Column(db.String(50), nullable=False),
    likelihood = db.Column(db.String(50), nullable=False),
    weak_layer = db.Column(db.String(50)),
    trend = db.Column(db.String(50)),
    plan_id = db.Column(db.Integer, db.ForeignKey('plan.id'), nullable=False)
