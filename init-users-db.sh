#!/bin/bash
set -e
# Create new schema for App
psql -v APPSCHEMA="$APP_SCHEMA" -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE SCHEMA :APPSCHEMA ;
EOSQL