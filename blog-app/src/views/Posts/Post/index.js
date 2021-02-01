import { useParams } from "react-router-dom";
import usePost from "../../../hooks/posts/usePost";

function PostView() {
  const { id } = useParams();
  const { data, isLoading } = usePost(id);
  
  return <>lkjALSKDJALSKDJASLKJDLKASJDSALKJD {console.log(data)}</>;
}

export default PostView;
