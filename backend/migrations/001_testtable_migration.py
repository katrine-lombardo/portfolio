steps = [
    [
        """
        CREATE TABLE IF NOT EXISTS testtable (
            id SERIAL PRIMARY KEY,
            rightnow TIMESTAMP NOT NULL,
            colour VARCHAR(255)
        );
        """,
        """
        DROP TABLE testtable;
        """,
    ],
    [
        """
        INSERT INTO testtable (colour)
        VALUES ('pink'), ('blue'), ('indigo');
        """,
        """
        """,
    ],
]
