import React from "react";

const About = () => {
  let myAbout = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding:"70px",
    margin:"73px"
  };
  let AboutBg = {
    backgroundColor:"red"
  }

  return (
    <div className="about" style={AboutBg}>
      <div style={myAbout}>
        <p>
          Hii. My name is{" "}
          <span>
            <b><i>PRATHAMESH POTE</i></b>
          </span>{" "}
          and I'm a <b><i> FULLSTACK WEB DEVELOPER. </i></b>
        </p>
        <p>
          {" "}
          This notepad app is useful for begginers who seek to practice the
          React.
        </p>
      </div>
    </div>
  );
};

export default About;
