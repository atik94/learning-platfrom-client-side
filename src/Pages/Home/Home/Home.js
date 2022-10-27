import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="text-center">
      <div className="mt-5 img-style">
        <h2 className="pt-5 text-dark">We ensure better education for a better world</h2>
      </div>
      <Link to="/courses">
        <button className="btn btn-primary mt-3">Get Started</button>
      </Link>
    </div>
  );
};

export default Home;
