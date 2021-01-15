from .db import db
from .user import User


class Friend(db.Model):
    __tablename__ = 'friends'

    user_id = db.Column(db.Integer, db.ForeignKey(User.id), primary_key=True)
    friend_id = db.Column(db.Integer, db.ForeignKey(User.id), primary_key=True)

    user = db.relationship('User', foreign_keys='Friend.user_id', cascade="all, delete-orphan")
    friend = db.relationship('User', foreign_keys='Friend.friend_id', cascade="all, delete-orphan")

    def to_dict(self):
        return{
          "user": self.user.to_dict(),
          "friend": self.friend.to_dict()
        }
