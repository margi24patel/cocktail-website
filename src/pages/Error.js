import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1>Error</h1>
      <Link to="/" color="inherit">
        Return to Home Page
      </Link>
    </>
  );
};

export default Error;
