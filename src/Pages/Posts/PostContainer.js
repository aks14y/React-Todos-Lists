import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoPostForm from "../../Components/Form";
import PostList from "./PostList";

const LOCAL_STORAGE_KEY = "react-todo-list-posts";

function PostContainer() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isPending, setIsPending]= useState(true);

  useEffect(() => {
    const storagePosts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (storagePosts) {
      setPosts(storagePosts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    setTimeout(()=> {
      axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
        setIsPending(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsPending(false);
        setError(err.message);
      });
    },1000)
  }, []);

  const addNewPost = (post, desc) => {
    setPosts((prev) => [
      ...prev,
      {
        userId: 1,
        id: posts.length + 1,
        title: post,
        body: desc,
      },
    ]);
  };

  function removeItem(id) {
    setPosts(posts.filter((post) => post.id !== id));
  }

  return (
    <div>
      <TodoPostForm submit={addNewPost} type="post" />
      {/* {error && <div>{error}</div>} */}
      {isPending &&  <div>Loading...</div>}
      {posts.length ? (
        <div>
          <PostList todos={posts} removeItem={removeItem} />
        </div>
      ) : (
        error
      )}
    </div>
  );
}

export default PostContainer;
