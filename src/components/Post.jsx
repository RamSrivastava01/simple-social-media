import { useContext } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { PostList as PostListData } from "../store/post-list-store";

function Post({ post }) {
  const { deletePost } = useContext(PostListData);
  return (
    <div className="card postCard">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
          <RiDeleteBin5Fill />
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary hashTag" key={tag}>
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          {`This post has been reacted by ${post.reactions} people`}
        </div>
      </div>
    </div>
  );
}

export default Post;
