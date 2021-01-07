from .db import db
from sqlalchemy.orm import relationship
from ..models.plan import Plan


class Route(db.Model):
    __tablename__ = 'routes'

    id = db.Column(db.Integer, primary_key=True)
    geo_route = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, unique=True)
    plans = db.relationship("Plan", backref='plan')

    def to_dict(self):
        return {
          "id": self.id,
          "route": self.geo_route,
          "user": self.user_id,
          "plans": self.plans
        }
