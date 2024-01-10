import {forwardRef, useImperativeHandle, useRef} from 'react'
import { createPortal } from 'react-dom'

const ResultModal = forwardRef(function ResultModal({timeRemaining, targetTime, onRestart}, ref){
    const modalRef = useRef()
    const isLost = timeRemaining <= 0
    const score = Math.round((1 - timeRemaining / (targetTime*1000)) * 100)
    const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2)
    useImperativeHandle(ref, () => {
        return{
            displayDialog(){
                modalRef.current.showModal()
            }
        }
    })

    return createPortal(<dialog ref={modalRef} className="result-modal" onClose={onRestart}>
    {isLost && <h2>You Lost</h2>}
    {!isLost && <h2>Your score : {score}</h2>}
    <p>The target time was <strong>{targetTime} seconds.</strong></p>
    <p>You Stopped the timer with<strong>{formattedTimeRemaining} seconds left.</strong></p>
    <form method="dialog" onSubmit={onRestart}>
        <button>Close</button>
    </form>
</dialog>, document.getElementById('modal')) 
})
 export default ResultModal