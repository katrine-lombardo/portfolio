<?php
require_once PROJECT_ROOT_PATH . "/Model/Database.php";
class CommentsModel extends Database
{
    public function getComments($limit)
    {
        return $this->select("SELECT * FROM comments ORDER BY id ASC LIMIT ?", ["i", $limit]);
    }
}
