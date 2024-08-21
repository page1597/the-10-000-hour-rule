import React from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header>
      <h1 className="sr-only">1만 시간의 법칙</h1>
      <section className={styles.title}>
        <h2 className="sr-only">1만 시간의 법칙</h2>
        <img
          className={styles.logo}
          src="./img/title.png"
          alt="1만 시간의 법칙"
          srcset="./img/title.png 1128w"
          sizes="(max-width: 767px) 267px, 564px"
        />
        <img
          className={styles.clock}
          src="./img/clock.png"
          alt=""
          srcset="./img/clock.png 522w"
          sizes="(max-width: 767px) 125px, 261px"
        />
      </section>
    </header>
  );
}
