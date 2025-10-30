import React from "react";
import { IStep } from "@/types";
import styles from "./TimeLineC.module.scss";

interface Props {
  data: IStep[];
}

export const TimelineC = ({ data }: Props) => {
  return (
    <div className={styles["timeline__container"]}>

      <div className={styles["timeline__line"]}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className={styles["timeline__dot"]}></div>
        ))}
      </div>
      {data.map((step: IStep, index: number) => {
        const isLeft = index % 2 === 0;

        return (
          <div
            key={index}
            className={`${
              isLeft
                ? styles["timeline__item--left"]
                : styles["timeline__item--right"]
            }`}
          >
            {isLeft ? (
              <>
                <div className={styles["timeline__content"]}>
                  <div className={styles["timeline__subcontainer"]}>
                    <h3 className={styles["timeline__subcontainer-subtitle"]}>
                      {step.title}
                    </h3>
                    <p className={styles["timeline__subcontainer-description"]}>
                      {step.description}
                    </p>
                  </div>
                  <div className={styles["timeline__icon"]}>{step.icon}</div>
                </div>
              </>
            ) : (
              <>
                <div className={styles["timeline__content"]}>
                  <div className={styles["timeline__icon"]}>{step.icon}</div>
                  <div className={styles["timeline__subcontainer"]}>
                    <h3 className={styles["timeline__subcontainer-subtitle"]}>
                      {step.title}
                    </h3>
                    <p className={styles["timeline__subcontainer-description"]}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
