from flask import Blueprint, jsonify, redirect, request, Flask, send_file
from flask_login import current_user
from app.models import db, Plan, Problem, User
from app.forms.tour_plan_form import TourPlanForm

import requests # from python
import os

landing_routes = Blueprint('landing', __name__)


@landing_routes.route('', methods=["GET"])
def getWeather():
    headers = {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json'
    }

    lat = 37.8099457
    lon = -107.6812071
    api_key = os.environ.get("WEATHER_API")

    endpoint = (f'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&units=imperial&exclude=hourly,daily&appid={api_key}')
    res = requests.get(endpoint, headers=headers)

    return res.json()
