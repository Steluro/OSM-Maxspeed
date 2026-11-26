"""FastAPI application entry point for the statistics service.

Run locally from ``services/`` with::

    uv run uvicorn maxspeed_stats.main:app --reload
"""

from fastapi import FastAPI

from maxspeed_stats import __version__
from maxspeed_stats.routers import health


def create_app() -> FastAPI:
    """Build and configure the FastAPI application.

    Using a factory keeps app construction side-effect free at import time
    and makes it easy to spin up isolated instances in tests.

    Returns:
        A fully configured FastAPI application.
    """
    application = FastAPI(
        title="OSM-Maxspeed Stats API",
        description="Statistics on the evolution of maxspeed tags in France.",
        version=__version__,
    )
    application.include_router(health.router)
    return application


app = create_app()
