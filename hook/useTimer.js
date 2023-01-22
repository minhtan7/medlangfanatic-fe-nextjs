import { useEffect, useRef, useState } from 'react';

const useCountdown = (targetDate) => {
    const countDownDate = new Date(targetDate).getTime();

    const [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    );
    const timerRef = useRef(0)
    useEffect(() => {
        timerRef.current = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);


        return () => clearInterval(timerRef.current);
    }, []);

    return [...getReturnValues(countDown), timerRef];
};

const getReturnValues = (countDown) => {
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
};

export default useCountdown 