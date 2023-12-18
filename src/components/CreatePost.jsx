import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split();

    //setting the value empty of input fields after fetching them

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <div>
      <form className="createPost" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User Id
          </label>
          <input
            ref={userIdElement}
            placeholder="userId"
            type="text"
            className="form-control"
            id="userId"
          />
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            ref={postTitleElement}
            placeholder="Enter your title for the post"
            type="text"
            className="form-control"
            id="title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            ref={postBodyElement}
            placeholder="Enter your content"
            type="text"
            className="form-control"
            id="body"
          />
          <div className="mb-3">
            <label htmlFor="reaction" className="form-label">
              How many people reacted to this?
            </label>

            <input
              ref={reactionsElement}
              placeholder="reactions"
              type="text"
              className="form-control"
              id="reaction"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tags" className="form-label">
              Add some tags to get reachable
            </label>

            <input
              ref={tagsElement}
              placeholder="Enter the tags"
              type="text"
              className="form-control"
              id="tags"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
