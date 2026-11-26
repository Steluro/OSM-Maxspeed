"""Tests for the healthcheck endpoint."""

from fastapi.testclient import TestClient

from maxspeed_stats.main import create_app


def test_healthcheck_returns_ok() -> None:
    """The root route responds 200 with an ``ok`` status and a message."""
    client = TestClient(create_app())

    response = client.get("/")

    assert response.status_code == 200
    assert response.json() == {
        "status": "ok",
        "message": "Service en ligne.",
    }
