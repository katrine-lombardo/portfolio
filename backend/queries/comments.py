from pydantic import BaseModel
from typing import Union, List
from queries.pool import pool
from datetime import datetime


class Error(BaseModel):
    message: str


class CommentIn(BaseModel):
    name: str
    email: str
    comments: str


class CommentOut(BaseModel):
    id: int
    name: str
    email: str
    comments: str
    submit_time: datetime


class CommentQueries:
    def submit_comment(self, comment: CommentIn) -> Union[CommentOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as cur:
                    cur.execute(
                        """
                        INSERT INTO comments (name, email, comments)
                        VALUES (%s, %s, %s)
                        RETURNING *;
                        """,
                        [
                            comment.name,
                            comment.email,
                            comment.comments,
                        ],
                    )
                    record = cur.fetchone()
                    if record is None:
                        return ValueError("No comment found")
                    else:
                        comment = {
                            "id": record[0],
                            "name": record[1],
                            "email": record[2],
                            "comments": record[3],
                            "submit_time": record[4],
                        }
                        return CommentOut(**comment)
        except Exception:
            return ValueError("Failed to submit comment")

    def get_all_comments(self, comment: CommentIn) -> List[CommentOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as cur:
                    cur.execute(
                        """
                        SELECT
                        * from comments
                        """
                    )
                    comments = [CommentOut(**comment)]
                    return comments
        except Exception:
            return ValueError("Failed to get comments")

    def delete_comment(self, comment_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as cur:
                    cur.execute(
                        """
                        DELETE FROM comments
                        WHERE id = %s;
                        """,
                        [comment_id],
                    )
                    return cur.rowcount > 0
        except Exception:
            return ValueError("Failed to delete comment")
