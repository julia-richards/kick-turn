from .db import db
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import JSONB
from ..models.plan import Plan


class Route(db.Model):
    __tablename__ = 'routes'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    geo_features = db.Column(JSONB, nullable=False)
    viewport = db.Column(JSONB, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    plans = db.relationship("Plan", back_populates="route")

    def to_dict(self):
        return {
          "id": self.id,
          "name": self.name,
          "geo_features": self.geo_features,
          "viewport": self.viewport,
          "user_id": self.user_id,
          "user": self.user.to_dict()
        }
