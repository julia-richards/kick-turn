from flask.cli import AppGroup
from .users import seed_users, undo_users
from .problem_types import seed_problem_types, undo_problem_types
from .routes import undo_routes
from .plans import undo_plans

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_problem_types()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_routes()
    undo_users()
    undo_plans()
    undo_problem_types()
    # Add other undo functions here
