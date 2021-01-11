from flask_wtf import FlaskForm
from wtforms import StringField, DateField, TextAreaField, IntegerField, SelectField
from wtforms.validators import DataRequired, Email, ValidationError


class TourPlanForm(FlaskForm):
    date = DateField('date', validators=[DataRequired()])
    avy_observations = TextAreaField('avalanche observations', validators=[DataRequired()])
    snowpack_summary = TextAreaField('snowpack summary', validators=[DataRequired()])
    temp_now = IntegerField('temperature now')
    wind_sp_now = IntegerField('wind speed now')
    wind_dir_now = StringField('wind direction now')
    sky_cover_now = StringField('sky cover now')
    precip_now = StringField('precipitation now')
    temp_fore = IntegerField('temperature forecast')
    wind_sp_fore = IntegerField('wind speed forecast')
    wind_dir_fore = StringField('wind direction forecast')
    sky_cover_fore = StringField('sky cover forecast')
    precip_fore = StringField('precipitation forecast')
    weather_contribution = StringField('weather contribution', validators=[DataRequired()])
    trend = SelectField('trend', choices=[('Stepping Out', 'Stepping Out'), ('Improving', 'Improving'), ('Maintaining', 'Maintaining'), ('Deterioration', 'Deterioration')])
    ates = SelectField('ATES (Avalanche Terrain Exposure Scale)', choices=[('Simple', 'Simple'), ('Challening', 'Challening'), ('Complex', 'Complex')], validators=[DataRequired()])
    terrain_avoiding = StringField('terrain avoiding', validators=[DataRequired()])
    obs_fore_summary = TextAreaField('observations and forecast summary', validators=[DataRequired()])
    mindset = SelectField('Mindset', choices=[('Stepping Out', 'Stepping Out'), ('Staus Quo', 'Staus Quo'), ('Assessment', 'Assessment'), ('Entrenchment', 'Entrenchment'), ('Stepping Back', 'Stepping Back'), ('Open Season', 'Open Season'), ('Spring Diurnal', 'Spring Diurnal')], validators=[DataRequired()])
    tour_plan = TextAreaField('tour plan', validators=[DataRequired()])
    emergency_plan = TextAreaField('emergency plan', validators=[DataRequired()])

