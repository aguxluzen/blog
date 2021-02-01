import axios from "axios";
import { useQuery } from "react-query";

const getPost = (postId) => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.data);
};

export default function usePost(postId) {
  return useQuery(["post", postId], () => getPost(postId));
}
