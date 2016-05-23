import os
from logging import StreamHandler
from sys import stdout

from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy


db = SQLAlchemy()


def create_app():
    from views.index import index_view

    app = Flask(__name__)

    # app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']
    app.register_blueprint(index_view)

    db.init_app(app)

    handler = StreamHandler(stdout)
    app.logger.addHandler(handler)
    return app
