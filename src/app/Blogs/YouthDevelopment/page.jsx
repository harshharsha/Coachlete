import React from "react";
import styles from "./page.module.css";

export default function YouthDevelopment() {
  return (
    <>
      <div className={styles.Main}>
        <div className={styles.YDHeadWrapper}>
          <div className={styles.YDHead}>
            <span>Youth development</span>
          </div>

          <div className={styles.YDLinks}>
            <div className="HomeLink">
              <span>HOME</span>
            </div>
            <div className="Gap">
              <span>-</span>
            </div>

            <div className="AboutLink">
              <span>YOUTH DEVELOPMENT</span>
            </div>
          </div>
        </div>

        <div className={styles.YDContentWrapper}>
          <div className={styles.YDContent}>
            <div className={styles.YDImg}>
              <img src="../assets/Home/volleyball.jpg" alt="" />
            </div>

            <div className="YDHeadDesc">
              <div className={styles.YDContentHead}>
                <span>Advanced Training: Turning Athletes into Champions</span>
              </div>

              <div className={styles.YDDesc}>
                <span>
                  You’ve mastered the basics, pushed through the intermediate
                  grind, and now stand at the advanced training stage. This is
                  where athletes stop playing for fun and start training like
                  professionals. At this level, every detail matters — diet,
                  mindset, recovery, and even the smallest technical
                  adjustments. Advanced training is not just about working
                  harder; it’s about working smarter and sharper.
                </span>
              </div>

              <div className={styles.YDContent2Head}>
                <span>What Makes Advanced Training Different?</span>
              </div>

              <div className={styles.YDContent2Desc}>
                <ul>
                  <li>
                    <span id={styles.listHead}>
                      Specialized Skill Development
                    </span>{" "}
                    – Tailor-made drills to fine-tune technical and tactical
                    strengths.
                  </li>
                  <li>
                    <span id={styles.listHead}>
                      High-Performance Conditioning{" "}
                    </span>
                    – Advanced workouts for explosive power, agility, and
                    endurance.
                  </li>
                  <li>
                    <span id={styles.listHead}>Competitive Readiness </span> –
                    Training with tournament situations in mind — pressure
                    drills, simulations, and mental coaching.
                  </li>
                  <li>
                    <span id={styles.listHead}>
                      Holistic Athlete Management{" "}
                    </span>
                    – Nutrition, physiotherapy, and recovery become as important
                    as practice itself.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.Tips}>
          <div className={styles.TipsWrapper1}>
            <div className={styles.TipsHead}>
              <span>Tips for Advanced Athletes</span>
            </div>

            <div className={styles.TipsLists}>
              <ul>
                <li>
                  <span id={styles.listHead}>Set Micro-Goals</span> - At this
                  level, small improvements can mean winning or losing. Track
                  details.
                </li>
                <li>
                  <span id={styles.listHead}>Focus on Recovery</span> - Ice
                  baths, physiotherapy, yoga, and mental rest are as important
                  as the grind.
                </li>
                <li>
                  <span id={styles.listHead}>Develop Game IQ</span> - Study
                  opponents, analyze matches, and refine strategy with your
                  coach.
                </li>
                <li>
                  <span id={styles.listHead}>Build a Winning Mindset</span> -
                  Confidence, discipline, and emotional resilience define
                  champions.
                </li>
              </ul>
            </div>
          </div>
          <div className="TipsWrapper2">afaf</div>
        </div>
      </div>
    </>
  );
}
