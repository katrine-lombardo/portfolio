from queries.comments import CommentIn, CommentOut, CommentQueries, Error
from typing import List, Union
from fastapi import APIRouter, Depends, HTTPException, status
import requests
import os


router = APIRouter()


@router.post(
    "/backend/comments",
    response_model=Union[CommentOut, Error],
)
async def create_comment(
    comment: CommentIn,
    comments: CommentQueries = Depends(),
):
    try:
        return comments.submit_comment(comment)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")


@router.get(
    "/backend/comments",
    response_model=Union[CommentOut, Error],
)
async def get_all_comments(
    comments: CommentQueries = Depends(),
):
    try:
        return comments.get_all_comments(comments)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")
