import React from "react";

const FAQ = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <h1 className="text-center">How can we help you ?</h1>
      </div>
      <div className="row mt-5">
        <div className="col-lg-6 col-sm-12">
          <div className="card text-bg-info mb-3" style={{ maxWidth: "24rem" }}>
            <div className="card-body">
              <h5 className="card-title">Guides for students</h5>
              <p className="card-text">Browse our in-depth guides to help you get started.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="card text-bg-warning mb-3" style={{ maxWidth: "24rem" }}>
            <div className="card-body">
              <h5 className="card-title">Webinars</h5>
              <p className="card-text">Watch recorded Webinars to level up your khonwlede.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
