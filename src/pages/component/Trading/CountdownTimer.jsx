import { useEffect, useState } from 'react';
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;
const targetDate = today+"T23:59:59";
const countdownTarget = new Date(targetDate);

const getTimeLeft = () => {
    const difference = countdownTarget - new Date(); // in milliseconds
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return {hours, minutes, seconds};
};

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    });
    return (
        <p className="text-gray-700 text-base/4 font-medium my-4 ml-8">Time left until market closing: {timeLeft.hours} hours {timeLeft.minutes} minutes</p>
    );
}

export default CountdownTimer;