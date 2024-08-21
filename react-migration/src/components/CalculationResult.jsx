import React from "react";
import styles from "../styles/CalculationResult.module.css";
import GoTrainingModal from "./GoTrainingModal";

export default function CalculationResult() {
  return (
    <section className={styles.calculation_result}>
      <h2 className="sr-only">훈련 일수 계산 결과</h2>
      <p className={styles.expert}>
        당신은<span>프로그래밍</span>전문가가 되기 위해서
      </p>
      <p className={styles.hour}>
        대략<span>5110</span>일 이상 훈련하셔야 합니다! :)
      </p>
      <div className={styles.buttons}>
        <button type="button" id="go-train" className={styles.go_train}>
          훈련하러 가기 GO!GO!
        </button>
        <button type="button" id="share" className={styles.share}>
          공유하기
        </button>
      </div>
      <GoTrainingModal />
    </section>
  );
}
