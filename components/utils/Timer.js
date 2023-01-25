import React from 'react'
import useCountdown from '../../hook/useTimer';
import styles from "@/styles/utils/Timer.module.css"

export const Timer = ({ targetDate }) => {

    // const targetDate = (new Date()).add
    // let targetDate = new Date(2022, 8, 21, 17, 59, 0);
    targetDate.setSeconds(targetDate.getSeconds() + 10);
    const [days, hours, minutes, seconds, timerRef] = useCountdown(targetDate);
    if (days + hours + minutes + seconds <= 0) {
        clearInterval(timerRef.current)
    }
    return (
        <ShowCounter
            days={days < 0 ? 0 : days}
            hours={hours < 0 ? 0 : hours}
            minutes={minutes < 0 ? 0 : minutes}
            seconds={seconds < 0 ? 0 : seconds}
        />
    );
}


const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div className={styles["show-counter"]}>
            <div
                className={styles["countdown-link"]}
            >
                <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
                <p>:</p>
                <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
            </div>
        </div>
    );
};
const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
        <div className={isDanger ? `${styles.countdown} ${styles.danger}` : styles.countdown}>
            <p>{value}</p>
            <span>{type}</span>
        </div>
    );
};