import React from "react";
import styles from "../styles/GoTrainingModal.module.css";
export default function GoTrainingModal() {
  return (
    <article className={styles.modal}>
      <header>
        <h2 className="sr-only">훈련하러 가기</h2>
      </header>
      <div className={styles.modal_text_container}>
        <p>
          화이팅!!<span>♥♥♥</span>
        </p>
        <p className={styles.small_text}>당신의 꿈을 응원합니다!</p>
        <img
          className={styles.licat}
          src="./img/licat.png"
          alt="licat illust"
          srcset="./img/licat.png 866w"
          sizes="(max-width: 767px) 241px, 433px"
        />
      </div>
      <footer>
        <button type="button" id="exit-and-go-train">
          종료하고 진짜 훈련하러 가기 GO!GO!
        </button>
      </footer>
    </article>
  );
}
