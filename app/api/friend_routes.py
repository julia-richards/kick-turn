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

# /api/friends
@friend_routes.route('', methods=["GET"])
@login_required
def userFriends():
    """
    Lists all user friends
    """
    friend_user_ids = [friend.friend_id for friend in current_user.friends]
    users = User.query.filter(User.id.in_(friend_user_ids)).all()
    res = {"friends": [user.to_dict() for user in users]}
    return res, 200

# /api/friends/:friend_id
@friend_routes.route('/<int:friend_id>', methods=["DELETE"])
@login_required
def deleteFriend(friend_id):
    """
    Removes friend from user by friend id
    """
    friend_join = Friend.query.get({"user_id": current_user.id, "friend_id": friend_id})
    name = friend_join.friend.username
    db.session.delete(friend_join)
    db.session.commit()
    res = {"message": '{} has been removed.'.format(name)}
    return res, 200


# /api/friends/my-friends
@friend_routes.route('/my-friends', methods=["GET"])
@login_required
def myFriends():
    """
    Current friends
    """
    query = "%{}%".format(request.args.get('query'))
    friend_ids = [friend.friend_id for friend in current_user.friends]
    users = User.query.filter(User.username.ilike(query)).filter(User.id.in_(friend_ids)).limit(5).all()
    res = {"options": [{"label": user.username, "value": user.id} for user in users]}
    return res, 200