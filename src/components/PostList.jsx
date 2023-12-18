import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
function PostList() {
  const { postList } = useContext(PostListData);

  return (
    <div>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      {/* <Post />
      <Post /> */}
    </div>
  );
}

export default PostList;
