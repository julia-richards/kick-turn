from .db import db
from ..models.plan import plan_problems, Plan
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship

class ProblemType(db.Model):
    __tablename__ = 'problem_types'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    problems = relationship("Problem", back_populates="problem_type", cascade="all, delete-orphan")
