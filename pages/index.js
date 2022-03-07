import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import assets from "../lib/assets";
import styles from "../styles/Home.module.css";
import Blogs from "../lib/Blogs";

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

const ICONS_CONTAINER_WIDTH = 500;

function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const title = useRef();
  const blue = useRef();
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
    function onScroll(e) {
      if (window.innerWidth > 600) {
        const max = window.innerHeight;
        const scrolled = e.target.documentElement.scrollTop;
        const op = Math.max(0, 1 - scrolled / max).toFixed(2);
        blue.current.style.backgroundImage = `linear-gradient(120deg, rgba(240, 147, 251, ${op}) 0%, rgba(245, 87, 108, ${op}) 100%)`;
      }
    }
    document.addEventListener("scroll", onScroll);
    return () => {
      clearInterval(interval);
      document.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div className={styles.hero}>
      <div
        className={[styles.intro]
          .concat(imageLoaded ? styles.ready : [])
          .join(" ")}
        ref={blue}
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
            <a href="https://standardresume.co/r/basithk">Resume</a>
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
            <div className={styles.border}></div>
            <div className={styles.border2}></div>
            <div className={styles.border3}></div>
            <div className={styles.icons}>
              {assets.map((f, key) => {
                const index = parseInt(key, 10) / assets.length;
                const r = ICONS_CONTAINER_WIDTH / 2;
                const left = 210 + r * Math.cos(2 * Math.PI * index);
                const top = 210 + r * Math.sin(2 * Math.PI * index);
                {/* return <div className={styles.box} style={{ left, top }} />; */}
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

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Basith Kunimal</title>
        <meta name="description" content="Web developer" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="reactjs,programmer,coder,software,techie,html,javascript,css,mysql,profile,nextjs"
        />
      </Head>

      <main className={styles.main}>
        <Hero />
        <Blogs />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
