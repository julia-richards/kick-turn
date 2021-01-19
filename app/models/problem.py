from .db import db
from ..models.plan import plan_problems, Plan
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import JSONB
from flask_sqlalchemy import SQLAlchemy


class Problem(db.Model):
    __tablename__ = 'problems'

    id = db.Column(db.Integer, primary_key=True)
    problem_type_id = db.Column(db.Integer, db.ForeignKey('problem_types.id'))
    problem_type = db.relationship("ProblemType", back_populates="problems")
    aspect_elevation = db.Column(JSONB)
    size = db.Column(db.String(50), nullable=False)
    likelihood = db.Column(db.String(50), nullable=False)
    weak_layer = db.Column(db.String(50))
    plans = db.relationship("Plan", secondary=plan_problems, back_populates="avy_problems")
