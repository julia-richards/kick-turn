from .db import db
from ..models.plan import plan_problems, Plan
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship

class Problem(db.Model):
    __tablename__ = 'problems'

    id = db.Column(db.Integer, primary_key=True)
    problem_type_id = db.Column(db.Integer, db.ForeignKey('problem_types.id'))
    problem_type = relationship("ProblemType", back_populates="problems")
    aspect = db.Column(db.String(50), nullable=False)
    elevation = db.Column(db.Integer)
    danger_rating = db.Column(db.String(50), nullable=False)
    size = db.Column(db.String(50), nullable=False)
    likelihood = db.Column(db.String(50), nullable=False)
    weak_layer = db.Column(db.String(50))
    trend = db.Column(db.String(50))
    plans = db.relationship("Plan", secondary=plan_problems, back_populates="avy_problems")
