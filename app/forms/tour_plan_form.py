# type = SelectField("Type", choices=[('Other', 'Other'), ('String', 'String'), ('Woodwind', 'Woodwind'), ('Brass', 'Brass'), ('Percussion', 'Percussion')])

from flask_wtf import FlaskForm
from wtforms import StringField, DateField, TextAreaField, IntegerField, SelectField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


class TourPlanForm(FlaskForm):
    date = DateField('date', validators=[DataRequired()])
    avy_observations = TextAreaField('avalanche observations', validators=[DataRequired(), user_exists])
    snowpack_summary = TextAreaField('snowpack summary', validators=[DataRequired()]),
    temp_now = IntegerField('temperature now', validators=[DataRequired()]),
    wind_sp_now = IntegerField('wind speed now', validators=[DataRequired()]),
    wind_dir_now = StringField('wind direction now', validators=[DataRequired()]),
    sky_cover_now = StringField('sky cover now', validators=[DataRequired()]),
    precip_now = StringField('precipitation now', validators=[DataRequired()]),
    temp_fore = IntegerField('temperature forecast', validators=[DataRequired()]),
    wind_sp_fore = IntegerField('wind speed forecast', validators=[DataRequired()]),
    wind_dir_fore = StringField('wind direction forecast', validators=[DataRequired()]),
    sky_cover_fore = StringField('sky cover forecast', validators=[DataRequired()]),
    precip_fore = StringField('precipitation forecast', validators=[DataRequired()]),
    weather_contribution = StringField('weather contribution', validators=[DataRequired()]),
    ates = StringField('avalanche terrain exposure scale', validators=[DataRequired()]),
    terrain_avoiding =
    obs_fore_summary =
    mindset =
    tour_plan = TextAreaField('tour plan', validators=[DataRequired()]),
    emergency_plan = TextAreaField('emergency plan', validators=[DataRequired()]),
