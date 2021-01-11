from .db import db
from sqlalchemy.orm import relationship
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from ..models.plan import Plan


user_plans = db.Table('user_plans',
    db.Column('plan_id', db.Integer, db.ForeignKey('plans.id'), primary_key=True),
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    extend_existing=True
)
class User(db.Model, UserMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    avy_edu = db.Column(db.String(255))
    hashed_password = db.Column(db.String(255), nullable=False)
    routes = db.relationship("Route", backref='user', cascade="all, delete-orphan")
    plans = db.relationship('Plan', secondary=user_plans, lazy='subquery', backref=db.backref('users', lazy=True))


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "avy_edu": self.avy_edu,
            }
