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

    lat = request.args.get('lat')
    lon = request.args.get('lon')
    api_key = os.environ.get("WEATHER_API")

    endpoint = (f'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&units=imperial&exclude=hourly&appid={api_key}')
    res = requests.get(endpoint, headers=headers)

    json = res.json()
    if 'snow' in json['daily']:
        snow = json['daily']['snow']
    else:
        snow = 0
    temp = round(json['current']['temp'], 0)

    return {"snow": snow, "temp": temp}