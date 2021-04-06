import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(
    "https://my-json-server.typicode.com/anushpoudel/anush-blogs-json-server/blogs/" +
      id
  );
  const history = useHistory();

  const handleClick = () => {
    fetch(
      "https://my-json-server.typicode.com/anushpoudel/anush-blogs-json-server/blogs/" +
        blog.id,
      {
        method: "DELETE",
      }
    ).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
