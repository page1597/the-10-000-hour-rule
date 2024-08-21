import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <img
        className={styles.clock}
        src="./img/logo.png"
        alt="weniv"
        srcset="./img/logo.png 250w"
        sizes="(max-width: 767px) 91px, 125px"
      />
      <p className={styles.copyright_notice}>
        ※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.
        <br />
        수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.
      </p>
    </footer>
  );
}
