import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

const Loading = ({ isLoading, children }) => {
  return (
    <React.Fragment>
      {isLoading && <Spinner />}

      {children}
    </React.Fragment>
  );
};

export default Loading;
