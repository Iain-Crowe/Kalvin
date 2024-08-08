from typing import Generator

import pytest

from flask.testing import FlaskClient

from app import create_app, db
from app.config import TestConfig

@pytest.fixture(scope='module')
def test_client() -> Generator[FlaskClient, None, None]:
    flask_app = create_app()
    flask_app.config.from_object(TestConfig)

    testing_client = flask_app.test_client()

    with flask_app.app_context():
        db.create_all()
        yield testing_client
        db.drop_all()