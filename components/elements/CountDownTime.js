// import Countdown from './CountDown'
import dynamic from 'next/dynamic'
const Countdown = dynamic(() => import('./CountDown'), {
    ssr: false,
})

export default function CountDownTime() {
    const currentTime = new Date()
    return (
        <>
            <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 34)} />
        </>
    )
}
