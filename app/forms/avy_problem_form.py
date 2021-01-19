from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, FormField
from wtforms.validators import DataRequired, Email, ValidationError


class AvyProblemForm(FlaskForm):

    problem_type = StringField('problem_type')
    aspect_elevation = FormField('aspect / elevation')
    size = StringField('size')
    likelihood = StringField('likelihood')
    weak_layer = StringField('weak layer')
