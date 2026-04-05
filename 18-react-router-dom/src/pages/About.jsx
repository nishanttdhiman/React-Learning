import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();
  const btnClicked = () => {
    navigate("/");
    console.log("Button Clicked");
  };
  return (
    <div>
      <button
        onClick={btnClicked}
        className="bg-emerald-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Return to Home Page
      </button>
      <h1>About Page</h1>
    </div>
  );
};

export default About;
