import { useEffect, useState } from "react";

const ListComments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const url = "https://badingo.net/api/comments.php";
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setComments(data);
        } else {
          console.error("Error fetching comments: ", error);
        }
      } catch (error) {
        console.error("Error fetching comments: ", error);
      }
    };
    fetchComments();
  }, []);

  return (
    <div>
      <div className='flex flex-wrap items-start justify-center'>
        {comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.id}</p>
            <p>{comment.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListComments;
