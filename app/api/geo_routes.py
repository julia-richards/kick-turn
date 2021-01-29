from flask import Blueprint, jsonify, redirect, request, Flask, send_file
from flask_login import login_required, current_user
from app.models import db, Route
# from app.s3 import upload_file

geo_routes = Blueprint('routes', __name__)


# /api/routes
@geo_routes.route('', methods=["POST"])
@login_required
def create():
    """
    Adds a route
    """
    route = Route(
      user_id=current_user.id,
      name=request.json['name'],
      geo_features=request.json["geo_features"],
      viewport=request.json['viewport']
    )
    db.session.add(route)
    db.session.commit()
    return route.to_dict(), 200

# /api/routes
@geo_routes.route('', methods=["GET"])
@login_required
def listMyRoutes():
    """
    Lists all of users routes
    """
    routes = Route.query.filter_by(user_id=current_user.id).all()
    res = {"routes": [route.to_dict() for route in routes]}
    return res, 200

# /api/routes/options
@geo_routes.route('/options', methods=["GET"])
@login_required
def myRouteOptions():
    """
    Lists all of users routes w/ filter query
    """
    query = "%{}%".format(request.args.get('query'))
    routes = Route.query.filter(Route.name.ilike(query)).filter_by(user_id=current_user.id).all()
    res = {"options": [{'label': route.name, 'value': route.id} for route in routes]}
    return res, 200

# /api/routes/:routeId
@geo_routes.route('/<int:id>', methods=["GET"])
def get(id):
    """
    Gets route by ID
    """
    route = Route.query.get(id)
    res = {**route.to_dict(), "plans": [plan.to_dict() for plan in route.plans]}
    return res, 200

# /api/routes/:routeId
@geo_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def deleteRoute(id):
    """
    Removes route by ID
    """
    route = Route.query.get(id)
    db.session.delete(route)
    db.session.commit()

    return {"message": "Route has been removed"}, 200
