import os
from flask import Flask, render_template, request, session
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager

from .models import db, User
from .api.auth_routes import auth_routes
from .api.friend_routes import friend_routes
from .api.geo_routes import geo_routes
from .api.landing_routes import landing_routes
from .api.plan_routes import plan_routes
from .api.problem_type_routes import problem_type_routes
from .api.user_routes import user_routes

from .seeds import seed_commands

from .config import Config

app = Flask(__name__)

# Setup login manager
login = LoginManager(app)
login.login_view = 'auth.unauthorized'


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


# Tell flask about our seed commands
app.cli.add_command(seed_commands)

app.config.from_object(Config)
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(friend_routes, url_prefix='/api/friends')
app.register_blueprint(geo_routes, url_prefix='/api/routes')
app.register_blueprint(plan_routes, url_prefix='/api/plans')
app.register_blueprint(problem_type_routes, url_prefix='/api/problem_types')
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(landing_routes, url_prefix='/api/landing')
db.init_app(app)
Migrate(app, db)

# Application Security
CORS(app)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
                        generate_csrf(),
                        secure=True if os.environ.get(
                            'FLASK_ENV') == 'production' else False,
                        samesite='Strict' if os.environ.get(
                            'FLASK_ENV') == 'production' else None,
                        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')
