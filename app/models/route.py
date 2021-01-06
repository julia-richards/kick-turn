from .db import db
from ..models.plan import Plan


class Route(db.Model):
    __tablename__ = 'routes'

    id = db.Column(db.Integer, primary_key=True)
    geo_route = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False),
    plans = db.relationship("Plan", backref='plan')

    def to_dict(self):
        return {
          "id": self.id,
          "route": self.geo_route,
          "user": self.user_id
          "plans": self.plans
        }
