import React from "react";
import styles from "../styles/Quotation.module.css";

export default function Quotation() {
  return (
    <section className={styles.quotation}>
      <h2 className="sr-only">인용 문구</h2>
      <p>“연습은 어제의 당신보다 당신을 더 낫게 만든다.”</p>
      <p className={styles.details}>
        <img
          className={styles.clock}
          src="./img/quotes.png"
          alt=""
          srcset="./img/quotes.png 986w"
          sizes="(max-width: 767px) 302px, 493px"
        />
        <span>1만 시간의 법칙</span>은<br />
        어떤 분야의 전문가가 되기 위해서는
        <br />
        최소한 1만 시간의 훈련이 필요하다는 법칙이다.
      </p>
    </section>
  );
}
