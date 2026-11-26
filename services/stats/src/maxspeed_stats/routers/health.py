"""Healthcheck endpoint used to verify that the API is up and responding."""

from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(tags=["health"])


class HealthResponse(BaseModel):
    """Payload returned by the healthcheck endpoint.

    Attributes:
        status: Machine-readable service state, ``"ok"`` when healthy.
        message: Human-readable message describing the service state.
    """

    status: str
    message: str


@router.get("/", summary="Healthcheck")
async def healthcheck() -> HealthResponse:
    """Report that the API is running.

    Returns:
        A ``HealthResponse`` indicating the service is healthy.
    """
    return HealthResponse(status="ok", message="Service en ligne.")
