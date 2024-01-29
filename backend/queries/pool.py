import os
import mysql.connector

db_config = {
    "host": "localhost",
    "user": "gr33nguy",
    "password": "******",
    "database": "portfolio",
    "port": 3306,
}

connection = mysql.connector.connect(**db_config)
