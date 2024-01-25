steps = [
    [
        """
        CREATE TABLE IF NOT EXISTS comments (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            comments TEXT NOT NULL,
            rightnow TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
        """,
        """
        DROP TABLE comments;
        """,
    ],
    [
        """
        INSERT INTO comments (name, email, comments)
        VALUES ('Domino Lombardo', 'domino@doggy.com', 'Here are all the reasons
        I deserve more treats...');
        """,
        """
        """,
    ],
]
