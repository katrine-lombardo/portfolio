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
    <table className='table-auto text-left w-full border-separate border-spacing-3'>
      <thead>
        <tr>
          <th>TESTINGDate</th>
          <th>TESTINGTime</th>
          <th>Author</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        {comments
          .slice()
          .reverse()
          .map((comment, index) => (
            <tr key={index} className='border-b border-gray-200'>
              <td>
                {new Date(comment.submit_time).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </td>
              <td>
                {new Date(comment.submit_time).toLocaleTimeString("en-US", {
                  hour12: false,
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </td>
              <td>{comment.name}</td>
              <td className='w-fit'>{comment.comment}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default ListComments;
