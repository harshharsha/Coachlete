import React from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./Homesection.module.css";
import Info from "../Info/Info";

export default function Homesection() {
  return (
    <>
      <div className={styles.HomeMain}>
        {/* <NavBar /> */}
        <div className={styles.HomeVideo}>
          <div className={styles.HomeVideoWrapper}>
            <img src="assets/Home/volleyball.jpg" alt="" />
          </div>

          <div className={styles.HomeWrapper}>
            <div className={styles.HomeText}>
              <div className={styles.HomeTextWrapper}>
                <span>Turning</span>
                <br />
                <span>practice into</span>
                <br />
                <span>performance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Info /> */}
      {/* <div>TEst</div> */}
    </>
  );
}
