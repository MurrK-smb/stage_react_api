import "./Main.css";
import aboutImage from "../../images/author.jpg";
import React from "react";

const Main = () => {
  return (
    <main className="main">
      <section className="about">
        <img
          src={aboutImage}
          className="about__image"
          alt="A smartphone that is showing a dashboard"
        ></img>
        <div className="about__wrapper">
          <h2 className="about__title">About the author</h2>
          <p className="about__description">
            Hi everyone! I'm Nick. I'm a motivated and ambitious aspiring
            software engineer with a technical skillset of HTML, CSS and
            JavaScript as well as other technologies such as Node, SQL, MongoDB,
            and Express.
          </p>
          <p className="about__description">
            I’m a driven person and extremely versatile. I work well under
            pressure and am eager to share my new coding passion with the world.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Main;
