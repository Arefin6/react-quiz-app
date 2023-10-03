/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import image from "../assets/images/3.jpg";
import classes from "../styles/Video.module.css";

const Video = () => {
  return (
    <a href="#">
      <div className={classes.video}>
        <img src={image} alt={"title"} />
        <p>React Hooks Into</p>
        <div className={classes.qmeta}>
          <p> Questions</p>
          <p>Total points 0</p>
        </div>
      </div>
    </a>
  );
};

export default Video;
