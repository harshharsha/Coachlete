import React from "react";
import styles from "./page.module.css";

export default function BeginnerTraining() {
  return (
    <>
      <div className={styles.Main}>
        <div className={styles.YDHead}>
          <span>Beginner's training</span>
        </div>

        <div className={styles.YDContentWrapper}>
          <div className={styles.YDContent}>
            <div className={styles.YDImg}>
              <img src="../assets/Home/volleyball.jpg" alt="" />
            </div>

            <div className={styles.YDDesc}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                ducimus rerum magnam voluptatibus eius iure aliquid temporibus,
                minus obcaecati quod, dignissimos officiis est eum maxime at
                quis doloremque consectetur quas.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
