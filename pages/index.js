import React from "react";
import Head from "next/head";

const Home = () => (
  <div>
    <h1>Travel agency for everyone!</h1>

    <h3>
      Hooray 🎉 - you have a great opportunity travel to Redang, Malaysia only
      for 599$! 🏖🐢
    </h3>

    <img src="images/redang.jpg" className="main__img" />
    <div className="main__text">
      <p>
        Redang, Malaysia Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
    <span>
      <a href="#"> Contact Us </a>
    </span>

    <style jsx>{`
      :global(html, body) {
        margin: 0;
        padding: 0;
        height: 100%;
      }

      :global(body) {
        font-size: calc(10px + 1vmin);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: aqua;
        color: black;
      }

      .content {
        padding: 0 32px;
      }

      .main__img {
        width: 900px;
      }

      .main__text {
        width: 900px;
        text-align: justify;
        text-justify: inter-word;
      }
    `}</style>
  </div>
);

export default Home;
