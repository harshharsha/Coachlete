import React from "react";
import styles from "./Info.module.css";

export default function Info() {
  return (
    <>
      <div className={styles.InfoMain}>
        <div className={styles.InfoWrapper}>
          <div className={styles.InfoCard1}>
            <div className="InfoCarLogo"></div>
            <div className={styles.InfoCardHead}>
              <span>Junior league</span>
            </div>
            <div className={styles.InfoCardDesc}>
              <span>Consectetur edipiscing elit, sed do euismod tempo.</span>
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.InfoCard2}>
            <div className="InfoCarLogo"></div>
            <div className={styles.InfoCardHead}>
              <span>Personal training</span>
            </div>
            <div className={styles.InfoCardDesc}>
              <span>Consectetur edipiscing elit, sed do euismod tempo.</span>
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.InfoCard3}>
            <div className="InfoCarLogo"></div>
            <div className={styles.InfoCardHead}>
              <span>Top equipment</span>
            </div>
            <div className={styles.InfoCardDesc}>
              <span>Consectetur edipiscing elit, sed do euismod tempo.</span>
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.InfoCard4}>
            <div className="InfoCarLogo"></div>
            <div className={styles.InfoCardHead}>
              <span>Team competitions</span>
            </div>
            <div className={styles.InfoCardDesc}>
              <span>Consectetur edipiscing elit, sed do euismod tempo.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
