from .db import db
from .user import User


class Friend(db.Model):
    __tablename__ = 'friends'

    user_id = db.Column(db.Integer, db.ForeignKey(User.id), primary_key=True)
    friend_id = db.Column(db.Integer, db.ForeignKey(User.id), primary_key=True)
    request_status = db.Column(db.Boolean)

    user = db.relationship('User', foreign_keys='Friend.user_id')
    friend = db.relationship('User', foreign_keys='Friend.friend_id')