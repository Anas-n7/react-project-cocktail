import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>404 ERROR, NOT FOUND THE PAGE</h1>
        <Link to="/" className="btn btn-primary">
          BACK HOME
        </Link>
      </div>
    </section>
  );
};

export default Error;
