import { useRef, useState, useEffect } from "react";


export const Countdown = () => {
    
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        interval = setInterval(() => {
            const now = new Date();
            const hours = Math.floor(now.getHours());
            const minutes = Math.floor(now.getMinutes());
            const seconds = Math.floor(now.getSeconds());

            if (now) {
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            } else {
              alert('Algo pasa con la zona horaria')
            }
        }, 1000)
    }

    useEffect(() => {
        startTimer();
    })

    return (
        
      
        <div className="timer-container">
            <section>
                <p className="section">{timerHours}:{timerMinutes}:{timerSeconds}</p>
            </section>
        </div>
    
)
}
export default Countdown;

