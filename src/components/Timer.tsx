import { useEffect, useState } from "react"
import { TimerArgs } from "../types/TimerArgs";



export default function Timer({milisegundos}: TimerArgs) {

    const [segundos, setSegundos] = useState(0);

    console.log(milisegundos);

    useEffect(() => {
        setInterval(() => setSegundos(s => s + 1), 789)
    }, [])

    return (
        <>
            <h4>
                Timer: <small>{segundos}</small>
            </h4>
        </>
    )
}
