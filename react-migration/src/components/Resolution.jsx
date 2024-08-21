import React from "react";
import styles from "../styles/Resolution.module.css";

export default function Resolution() {
  return (
    <section className={styles.resolution}>
      <h2 className="sr-only">나의 다짐</h2>
      <p className={styles.expert}>
        나는
        <input placeholder="예)프로그래밍" />
        전문가가 될 것이다.
      </p>
      <p className={styles.hour}>
        <span>그래서 앞으로 매일 하루에</span>
        <input placeholder="예)5시간" />
        시간씩 훈련할 것이다.
      </p>

      <div className={styles.calculate_days_container}>
        <button type="button" id="calculate-days" className={styles.calculate_days}>
          <span>나는 며칠 동안 훈련을 해야</span>
          <span>1만 시간이 될까?</span>
        </button>
        <img
          className={styles.click}
          src="./img/click.png"
          alt=""
          srcset="./img/click.png 128w"
          sizes="(max-width: 767px) 43px, 64px"
        />
      </div>
    </section>
  );
}
