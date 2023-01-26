import React from 'react'
import styles from "@/styles/utils/LoadingSpinner.module.css"

export default function LoadingSpinner() {
    return (
        <div className={styles['loading-spinner']}>
            <div className={styles["loading-container"]}>
                <div className={styles["item"]}></div>
                <div className={styles["item"]}></div>
                <div className={styles["item"]}></div>
                <div className={styles["item"]}></div>
            </div>
        </div>
    )
}

