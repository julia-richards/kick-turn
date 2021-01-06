from .db import db


class Problem(db.Model):
    __tablename__ = 'problems'

    id = db.Column(db.Integer, primary_key=True)
    aspect = db.Column(db.String(50), nullable=False)
    elevation = db.Column(db.Integer)
    danger_rating = db.Column(db.String(50), nullable=False)
    size = db.Column(db.String(50), nullable=False)
    likelihood = db.Column(db.String(50), nullable=False)
    weak_layer = db.Column(db.String(50))
    trend = db.Column(db.String(50))
    plans = db.relationship("Plan", secondary=likes, back_populates="problems")
