import React from "react";
import styles from "./page.module.css";

export default function About() {
  return (
    <>
      <div className="AboutMain">
        <div className={styles.AboutHeadWrapper}>
          <div className={styles.AboutHead}>
            <span>About us</span>
          </div>

          <div className={styles.AboutLinks}>
            <div className="HomeLink">
              <span>HOME</span>
            </div>
            <div className="Gap">
              <span>-</span>
            </div>

            <div className="AboutLink">
              <span>ABOUT US</span>
            </div>
          </div>
        </div>

        <div className={styles.AboutContent}>
          <div className={styles.Whoweare}>
            <div className={styles.WhoweareImg}>
              <img src="../assets/Home/volleyball.jpg" alt="" />
            </div>

            <div className="WhoweareContent">
              <div className={styles.WhoweareHead}>
                <span>WHO WE ARE</span>
              </div>

              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
                rem excepturi? Modi ut facilis saepe eaque porro delectus,
                labore expedita debitis dolorem tenetur molestiae quae omnis
                eveniet consectetur recusandae velit?
              </span>
            </div>
          </div>

          <div className={styles.Aboutus}>
            <div className={styles.AboutusHeadWrapper}>
              <div className={styles.AboutusHead}>
                <span>ABOUT US</span>
              </div>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                earum at molestias enim exercitationem, placeat voluptate
                assumenda sapiente vel dolores, repellat provident, pariatur
                quos doloribus dignissimos id illum sunt totam.
              </span>
            </div>

            <div className={styles.AboutusImg}>
              <img src="../assets/Home/volleyball.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="AboutusPortfolio">
          <div className={styles.AboutusPortfoliohead}>
            <span>PORTFOLIO</span>
          </div>

          <div className={styles.AboutusPortfolioDesc}>
            <span>Match Highlights</span>
          </div>

          <div className={styles.AboutusPortfolioImg}>
            <img src="../assets/Home/volleyball.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
