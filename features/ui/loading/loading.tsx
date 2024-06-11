import React from "react";
import styles from "./loading.module.scss";

export function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner} data-cy="spinner"></div>
    </div>
  );
}
