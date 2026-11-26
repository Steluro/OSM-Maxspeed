# OSM-Maxspeed services

Python backend services for OSM-Maxspeed, managed as a [uv workspace](https://docs.astral.sh/uv/concepts/projects/workspaces/).

| Service | Package          | Purpose                                                   |
|---------|------------------|-----------------------------------------------------------|
| `stats`  | `maxspeed_stats`  | Statistics on the evolution of `maxspeed` tags in France.            |
| `editor` | `maxspeed_editor` | Editing tools to complete `maxspeed` tags and flag inconsistencies. |

Each service is an independent package (its own `pyproject.toml` and runtime dependencies),
deployable on its own. The workspace root shares a single lockfile, virtualenv, dev tooling
and lint/type/test configuration.

```text
services/
├── pyproject.toml             # workspace definition, dev deps, ruff/mypy/pytest config
├── uv.lock                    # exact versions for the whole workspace
├── stats/
│   ├── pyproject.toml         # service metadata and runtime deps
│   ├── src/maxspeed_stats/
│   └── tests/
└── editor/
    ├── pyproject.toml
    └── src/maxspeed_editor/
```

## Setup

Requires [uv](https://docs.astral.sh/uv/). From the `services/` directory:

```bash
uv sync
```

This creates `.venv/`, installs the Python version pinned in `.python-version` if needed,
and installs every service plus the dev tools at the versions recorded in `uv.lock`.

## Run a service

```bash
uv run uvicorn maxspeed_stats.main:app --reload
```

Then open <http://127.0.0.1:8000/> (healthcheck) or <http://127.0.0.1:8000/docs> (interactive API docs).

## Managing dependencies

```bash
uv add --package maxspeed-stats <package>   # runtime dependency of one service
uv add --dev <package>                      # shared development tool
uv remove --package maxspeed-stats <package>
uv lock --upgrade                           # bump all locked versions within the constraints
```

## Quality checks

```bash
uv run ruff check .
uv run ruff format --check .
uv run mypy */src
uv run pytest
```
