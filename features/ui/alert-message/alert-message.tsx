import React from "react";
import styles from "./alert-message.module.scss";
import { Button } from "../button";

interface AlertMessageProps {
  message: string;
  onTryAgain: () => void;
}

export function AlertMessage({ message, onTryAgain }: AlertMessageProps) {
  return (
    <div className={styles.container} data-cy="alert-message">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/alert-circle.svg"
        alt="alert icon"
        className={styles.icon}
      />
      <div className={styles.message}>{message}</div>
      <Button className={styles.button} onClick={onTryAgain}>
        Try again {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/arrow-right.svg"
          alt="arrow icon"
          className={styles.arrow}
        />
      </Button>
    </div>
  );
}
