from flask import Blueprint, jsonify, redirect, request, Flask, send_file
from flask_login import login_required, current_user
from app.models import db, Plan, Problem
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
    return {"plans": [plan for p in plans]}

# /api/plans
@plan_routes.route('', methods=["POST"])
@login_required
def add_plan():
    form = TourPlanForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        plan = Plan(
                    date=form.data["date"],
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
                    weather_contribution=form.data["weather_contribution"],
                    ates=form.data["ates"],
                    terrain_avoiding=form.data["terrain_avoiding"],
                    obs_fore_summary=form.data["obs_fore_summary"],
                    mindset=form.data["mindset"],
                    tour_plan=form.data["tour_plan"],
                    emergency_plan=form.data["emergency_plan"]
                )
        # for problem in avy_problems:
        #     create avy problem form to validate_on_submit
        #     popuate new problem object for each el in array
        #     problem_obj.plan = plan
        #     db.session.add(problem_obj)
        db.session.add(plan)
        db.session.commit()
        plan.users.append(current_user)
        return plan.to_dict()
    return {'errors': form.errors}, 422

# @plan_routes.route('/<int:id>', methods=["GET", "POST", "DELETE"])
# @login_required
# def update_song(id):
#     song = Song.query.get(id)
#     if request.method == 'GET':
#         res = song.to_dict()
#         res['likedByUser'] = current_user in song.users
#         return res
#     form = SongForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if request.method == 'DELETE':
#         db.session.delete(song)
#         db.session.commit()
#         return {'message': 'Song has been deleted'}
#     if song.user_id == current_user.id:
#         if form.validate_on_submit():
#             song = Song(
#                 title=form.data['title'],
#                 description=form.data['description'],
#                 image_url=form.data['image_url'],
#                 song_url=form.data['song_url'],
#                 user_id=current_user.id
#             )
#             db.session.add(song)
#             db.session.commit()
#             return song.to_dict()
#         return {'errors': form.errors}, 422
#     return {'errors': 'Only the artist can delete this song'}, 401

# @plan_routes.route('/edit/<int:id>', methods=['PATCH'])
# # @login_required
# def edit_song(id):
#     form = SongForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         if request.files:
#             file = request.files.get('file')
#             url = upload_file(file)
#             return {'url': url}
#         song = Song.query.get(id)
#         # if song.user_id == current_user.id:
#         data = request.json
#         print(data)
#         if form.data['title']:
#             song.title = data['title']
#         if form.data['description']:
#             song.description = data['description']
#         if form.data['image_url']:
#             song.image_url = data['image_url']
#         if form.data['song_url']:
#             song.song_url = data['song_url']
#         db.session.commit()
#         return song.to_dict()
#         # return {'errors': 'Only the artist can edit this song'}, 401
#     return {'errors': form.errors}, 422

# @plan_routes.route("/upload", methods=['POST', 'PATCH'])
# @login_required
# def upload():
#     if request.method == "POST":
#         file = request.files.get('file')
#         url = upload_file(file)

#         return {'url': url}
#     if request.method == "PATCH":
#         file = request.files.get('file')
#         url = upload_file(file)

#         return {'url': url}

# @plan_routes.route('/<int:id>/likes', methods=["POST"])
# @login_required
# def likeSong(id):
#     song = Song.query.get(id)
#     user = User.query.get(current_user.get_id())
#     likingUserIds = {u.id:True for u in song.users }
#     if user.id not in likingUserIds:
#         song.users.append(user)
#         db.session.commit()
#         return jsonify({"addedLike":True})
#     else:
#         song.users.remove(user)
#         db.session.commit()
#         return jsonify({"removedLike":True})
