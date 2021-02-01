import { useState, useEffect, createContext } from "react";
import axios from "axios";
/**PASOS PARA USAR CONTEXT
 * 1-Crear context
 * export const PostsContext = createContext();
 * 2- Crear provider (PostsProvider)
 */

export const PostsContext = createContext();

function PostsProvider(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("TODO ESTA MAL");
      });
  }, []);

  return (
    <>
      <PostsContext.Provider value={{ posts }}>
        {props.children}
      </PostsContext.Provider>
    </>
  );
}

export default PostsProvider;
