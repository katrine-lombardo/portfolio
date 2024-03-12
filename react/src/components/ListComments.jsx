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
    <div className='container'>
      <div className='flex items-start justify-center'>
        <ul role='list' className='divide-y divide-gray-100 w-fit'>
          <li className='text-xs text-gray-400 grid text-left items-start grid-cols-4'>
            <p>DATE</p>
            <p>TIME</p>
            <p>AUTHOR</p>
            <p>COMMENT</p>
          </li>
          {comments.map((comment, index) => (
            <li className='gap-x-6 py-5'>
              <div
                key={index}
                className='grid text-left items-start grid-cols-4'
              >
                <p>
                  {new Date(comment.submit_time).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p>
                  {new Date(comment.submit_time).toLocaleTimeString("en-US", {
                    hour12: false,
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <p>{comment.name}</p>
                <p>{comment.comment}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListComments;
