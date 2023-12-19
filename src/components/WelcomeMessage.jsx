const WelcomeMessage = ({ onGetPostClick }) => {
  return (
    <>
      <h1 className="welcomeMessage">There are no posts yet.</h1>
      <button
        onClick={onGetPostClick}
        type="button"
        className="btn btn-primary FetchPostBtn"
      >
        Fetch Posts
      </button>
    </>
  );
};

export default WelcomeMessage;
