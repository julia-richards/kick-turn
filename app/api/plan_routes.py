from flask import Blueprint, jsonify, redirect, request, Flask, send_file
from flask_login import login_required, current_user
from app.models import db, Plan, Problem, User
# from app.s3 import upload_file
from app.forms.tour_plan_form import TourPlanForm

plan_routes = Blueprint('plans', __name__)

# @plan_routes.route('/users/<int:user_id>/')
# @login_required
# def userPlans(user_id):
#     plans = Plan.query.filter_by(user_id)
#     return {"plans": [plan for p in plans]}


# api/plans
@plan_routes.route('', methods=["GET"])
@login_required
def listMyPlans():
    plans = Plan.query.filter(Plan.id.in_([plan.id for plan in current_user.plans])).all()
    return {"plans": [p.to_dict() for p in plans]}


# /api/plans
@plan_routes.route('', methods=["POST"])
@login_required
def add_plan():
    form = TourPlanForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        plan = Plan(
                    date=form.data["date"],
                    # danger_rating=form.data["danger_rating"],
                    avy_observations=form.data["avy_observations"],
                    snowpack_summary=form.data["snowpack_summary"],
                    temp_now=form.data["temp_now"],
                    wind_sp_now=form.data["wind_sp_now"],
                    wind_dir_now=form.data["wind_dir_now"],
                    sky_cover_now=form.data["sky_cover_now"],
                    precip_now=form.data["precip_now"],
                    temp_fore=form.data["temp_fore"],
                    wind_sp_fore=form.data["wind_sp_fore"],
                    wind_dir_fore=form.data["wind_dir_fore"],
                    sky_cover_fore=form.data["sky_cover_fore"],
                    precip_fore=form.data["precip_fore"],
                    trend=form.data["trend"],
                    weather_contribution=form.data["weather_contribution"],
                    ates=form.data["ates"],
                    terrain_avoiding=form.data["terrain_avoiding"],
                    obs_fore_summary=form.data["obs_fore_summary"],
                    mindset=form.data["mindset"],
                    tour_plan=form.data["tour_plan"],
                    emergency_plan=form.data["emergency_plan"],
                    route_id=form.data["route_id"]
                )

        db.session.add(plan)

        # add problems
        for problem in request.json['avy_problems']:
            new_problem = Problem(
                problem_type_id=problem['problem_type_id'],
                aspect_elevation=problem['aspect_elevation'],
                size=problem['size'],
                likelihood=problem['likelihood'],
                weak_layer=problem['weak_layer']
            )
            plan.avy_problems.append(new_problem)

        # add user + friends to plan
        plan.users.append(current_user)
        for friend_id in request.json['friend_ids']:
            friend_user = User.query.get(friend_id)
            plan.users.append(friend_user)

        db.session.commit()
        return plan.to_dict()
    return {'errors': form.errors}, 422


# /api/plans/:planId
@plan_routes.route('/<int:id>', methods=["GET"])
@login_required
def get(id):
    """
    Gets plan by ID
    """
    plan = Plan.query.get(id)
    res = plan.to_dict()
    non_user_friends = [user.to_dict() for user in plan.users if user != current_user]
    return {'plan': {**plan.to_dict(), "users":  non_user_friends}}, 200



# /api/plans/planId
@plan_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def deletePlan(id):
    """
    Removes plan by planid
    """
    plan = Plan.query.get(id)
    db.session.delete(plan)
    db.session.commit()
    res = {"message": '{} has been removed.'.format(plan.date)}
    return res, 200