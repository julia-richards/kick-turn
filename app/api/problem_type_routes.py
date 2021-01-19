from flask import Blueprint, jsonify, redirect, request, Flask, send_file
from flask_login import login_required
from app.models import db, ProblemType

problem_type_routes = Blueprint('problem_types', __name__)


# api/problem_types
@problem_type_routes.route('', methods=["GET"])
@login_required
def listProblemTypes():
    problem_types = ProblemType.query.all()
    return {"problem_types": [p.to_dict() for p in problem_types]}
