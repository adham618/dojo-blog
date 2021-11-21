import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();
  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blogs.id, {
      method: "DELETE"
    }).then(() => {
      navigate("/");
    })
  }
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loading.....</div>}
      {blogs && (
        <article>
          <h2>{blogs.title} :</h2>
          <p>Written by {blogs.author}</p>
          <p>{blogs.body}</p>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;