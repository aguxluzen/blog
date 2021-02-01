import axios from "axios";
import { useQuery } from "react-query";

const getPosts = () =>
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("TODO ESTA MAL");
    });

export default function usePosts() {
  return useQuery("posts", getPosts);
}
