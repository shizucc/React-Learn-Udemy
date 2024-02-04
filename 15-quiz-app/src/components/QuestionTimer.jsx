import { useEffect, useState } from "react"

export default function QuestionTimer({duration, onTimeout}){
    const [remainingTime, setRemainingTime] = useState(duration)
    
    useEffect(() => {
        const timer = setTimeout(onTimeout, duration)
        return () => {
            clearTimeout(timer)
        }
    }, [duration,onTimeout])

    useEffect(()=> {
        const interval = setInterval(()=> {
            setRemainingTime((prev) => prev-10)
        }, 10)

        return () => {
            clearInterval(interval)
        }
    }, []) 

    return(
        <progress value={remainingTime} max={duration} id="progress"/>
    )
}