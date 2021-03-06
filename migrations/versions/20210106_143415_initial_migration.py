"""Initial migration.

Revision ID: 64ba34349b95
Revises: ffdc0a98111c
Create Date: 2021-01-06 14:34:15.742895

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects.postgresql import JSONB



# revision identifiers, used by Alembic.
revision = '64ba34349b95'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('problem_types',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('problems',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('aspect_elevation', JSONB(), nullable=False),
    sa.Column('danger_rating', sa.String(length=50), nullable=False),
    sa.Column('size', sa.String(length=50), nullable=False),
    sa.Column('likelihood', sa.String(length=50), nullable=False),
    sa.Column('weak_layer', sa.String(length=50), nullable=True),
    sa.Column('problem_type_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['problem_type_id'], ['problem_types.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('routes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=False),
    sa.Column('geo_features', JSONB(), nullable=False),
    sa.Column('viewport', JSONB(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('plans',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('date', sa.Date(), nullable=False),
    sa.Column('avy_observations', sa.String(length=500), nullable=True),
    sa.Column('snowpack_summary', sa.String(length=500), nullable=True),
    sa.Column('temp_now', sa.Integer(), nullable=True),
    sa.Column('wind_sp_now', sa.Integer(), nullable=True),
    sa.Column('wind_dir_now', sa.String(length=50), nullable=True),
    sa.Column('sky_cover_now', sa.String(length=50), nullable=True),
    sa.Column('precip_now', sa.String(length=150), nullable=True),
    sa.Column('temp_fore', sa.Integer(), nullable=True),
    sa.Column('wind_sp_fore', sa.Integer(), nullable=True),
    sa.Column('wind_dir_fore', sa.String(length=50), nullable=True),
    sa.Column('sky_cover_fore', sa.String(length=50), nullable=True),
    sa.Column('precip_fore', sa.String(length=150), nullable=True),
    sa.Column('weather_contribution', sa.String(length=255), nullable=True),
    sa.Column('weather_summary', sa.String(length=255), nullable=True),
    sa.Column('trend', sa.String(length=255), nullable=True),
    sa.Column('ates', sa.String(length=50), nullable=True),
    sa.Column('terrain_avoiding', sa.String(length=150), nullable=True),
    sa.Column('obs_fore_summary', sa.String(length=255), nullable=True),
    sa.Column('mindset', sa.String(length=150), nullable=True),
    sa.Column('tour_plan', sa.String(length=1000), nullable=True),
    sa.Column('emergency_plan', sa.String(length=1000), nullable=True),
    sa.Column('route_id', sa.Integer()),
    sa.ForeignKeyConstraint(['route_id'], ['routes.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('plan_problems',
    sa.Column('plan_id', sa.Integer(), nullable=False),
    sa.Column('problem_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['plan_id'], ['plans.id'], ondelete='CASCADE'),
    sa.ForeignKeyConstraint(['problem_id'], ['problems.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('plan_id', 'problem_id')
    )
    op.create_table('user_plans',
    sa.Column('plan_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False)
    )
    op.add_column('users', sa.Column('avy_edu', sa.String(length=255), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'avy_edu')
    op.drop_table('plan_problems')
    op.drop_table('user_plans')
    op.drop_table('plans')
    op.drop_table('routes')
    op.drop_table('problems')
    op.drop_table('problem_types')
    # ### end Alembic commands ###
