const WelcomeMessage = ({}) => {
  return (
    <>
      <h1 className="welcomeMessage">
        {" "}
        <center> There are no posts yet. </center>
      </h1>
      <button type="button" className="btn btn-primary FetchPostBtn">
        Fetch Posts
      </button>
    </>
  );
};

export default WelcomeMessage;
