import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import assets from "../lib/assets";
import styles from "../styles/Home.module.css";

function getRandomString(length) {
  var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*@?+!";
  var result = "";
  for (var i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
}

function getTransitionString(labels, idx) {
  const from = labels[idx % labels.length];
  const to = labels[(idx + 1) % labels.length];
  const min = Math.min(from.length, to.length);
  const max = Math.max(from.length, to.length);
  const length = min + parseInt(Math.random() * (max - min));
  return getRandomString(length);
}

function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const title = useRef();
  useEffect(() => {
    const image = new Image();
    image.src = "/basi.jpg";
    image.onload = function () {
      setImageLoaded(true);
    };
    const labels = [
      "Fullstack developer",
      "Web developer",
      "Javascript developer",
      "UI Developer",
      "Application Engineer",
      "Frontend developer",
      "Backend developer",
    ];
    let j = 0;
    const interval = setInterval(() => {
      const len = 20;
      for (let i = 0; i < len; i++) {
        setTimeout(() => {
          const str =
            i === len - 1
              ? labels[j % labels.length]
              : getTransitionString(labels, j);
          title.current.innerText = str;
        }, i * 20);
      }
      j++;
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className={styles.hero}>
      <div
        className={[styles.intro]
          .concat(imageLoaded ? styles.ready : [])
          .join(" ")}
      >
        <div>
          <div>
            <h1>
              <span className={styles.reveal}>Basith</span>
              <br />
              <span className={styles.reveal}>Kunimal</span>
            </h1>
          </div>
          <div>
            <h2 className={styles.title} className={styles.reveal} ref={title}>
              Fullstack Developer
            </h2>
          </div>
          <div className={styles.links + " " + styles.reveal}>
            <a href="https://github.com/basith374">Github</a>
            <a href="https://standardresume.co/r/basith">Resume</a>
            <a href="https://www.linkedin.com/in/basithk/">LinkedIn</a>
            {/* <a href="https://stackoverflow.com/cv/bazi">Stackoverflow</a> */}
          </div>
        </div>
      </div>
      <div className={styles.backgrounds}>
        <div className={styles.profile}>
          <div className={styles.clipContainer}>
            <div className={styles.clip}></div>
          </div>
          <div className={styles.iconsContainer}>
            <div className={styles.icons}>
              {assets.map((f, key) => {
                const index = parseInt(key, 10) / assets.length;
                const r = 300;
                const left = 250 + r * Math.cos(2 * Math.PI * index);
                const top = 250 + r * Math.sin(2 * Math.PI * index);
                return React.cloneElement(f, {
                  key,
                  style: { left, top },
                });
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className={styles.hero}>
      <div style={{ width: "40%" }}></div>
      <div className={styles.intro} style={{ flex: 1 }}></div>
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Basith Kunimal</title>
        <meta name="description" content="Web developer" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="reactjs,programmer,coder,software,techie,html,javascript,css,mysql,profile,nextjs" />
      </Head>

      <main className={styles.main}>
        <Hero />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
