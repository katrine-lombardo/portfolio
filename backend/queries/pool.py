import os
import mysql.connector

db_config = {
    "host": os.environ.get("DB_HOST"),
    "user": os.environ.get("DB_USERNAME"),
    "password": os.environ.get("DB_PASSWORD"),
    "database": os.environ.get("DB_DATABASE"),
    "port": int(os.environ.get("DB_PORT")),
}

connection = mysql.connector.connect(**db_config)
