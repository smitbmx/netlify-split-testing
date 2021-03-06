import React from "react";
import Head from "next/head";

const Home = () => (
  <div>
    <header>
      <h1 className="header__name">
        Travel agency for everyone, try the Winter Alps!
      </h1>
      <h2 className="header__name"></h2>
    </header>
    <div id="main">
      <article>
        <p>
          Alps Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <img src="images/alps.jpg" className="main__img" />
        <p>
          Alps Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          Alps Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </article>
      <nav></nav>
      <aside></aside>
    </div>
    <footer></footer>

    <style jsx>{`
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
      }
      #main {
        display: flex;
        min-height: calc(100vh - 40vh);
      }
      #main > article {
        flex: 1;
        text-align: justify;
      }
      #main > nav,
      #main > aside {
        flex: 0 0 20vw;
        background: #2b3856;
      }
      #main > nav {
        order: -1;
      }
      header,
      footer,
      article,
      nav,
      aside {
        padding: 1em;
      }
      header,
      footer {
        background: #2b3856;
        height: 20vh;
      }

      .main__img {
        max-width: 100%;
      }

      .header__name {
        color: ghostwhite;
        text-align: center;
      }
    `}</style>
  </div>
);

export default Home;
