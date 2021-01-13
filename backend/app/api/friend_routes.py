from flask import Blueprint, jsonify, redirect, request, Flask, send_file
from flask_login import login_required, current_user
from app.models import db, Friend, User
# from app.s3 import upload_file

friend_routes = Blueprint('friends', __name__)


# /api/friends/options
@friend_routes.route('/options', methods=["GET"])
@login_required
def potentialFriends():
    """
    Lists friend options
    """
    query = "%{}%".format(request.args.get('query'))
    ignore_ids = [friend.friend_id for friend in current_user.friends] # skip friends
    ignore_ids.append(current_user.id) # skip self
    users = User.query.filter(User.username.ilike(query)).filter(User.id.notin_(ignore_ids)).limit(5).all()
    res = {"options": [{"label": user.username, "value": user.id} for user in users]}
    return res, 200


# /api/friends
@friend_routes.route('', methods=["POST"])
@login_required
def addFriend():
    """
    Adds a friend
    """
    friend = Friend(
      user_id=current_user.id,
      friend_id=request.json["friend_id"]
    )
    db.session.add(friend)
    db.session.commit()
    return friend.to_dict(), 200