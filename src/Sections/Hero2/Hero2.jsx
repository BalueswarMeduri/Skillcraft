import React from "react";
import "./Hero2.css";
import { Link } from "react-router-dom";

const Hero2 = () => {
  return (
    <div>
      <section id="down">
        <div className="hero2">
          <h1>Start practicing DSA</h1>
          <p>
            We have most important and previously asked questions <br /> from
            top companies to master it with dedication and perseverance.
          </p>
          <Link to="/Dsa">
            <button className="btn herobtn">DSA</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero2;
