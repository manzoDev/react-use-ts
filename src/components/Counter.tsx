import { useState } from "react"

export default function Counter() {

    const [counter, setCount] = useState(0);

    const incrementar = (n: number) => {
        setCount(counter + n);
    }

    const resetear = () => {
        setCount(0);
    }

    return (
        <div className="mt-5">
            <h3>Counter: useState</h3>
            <span>valor:{counter}</span>
            <br/>

            <button 
            onClick={() => incrementar(1)}
            className="btn btn-outline-primary mt-2">
                +1
            </button>

            <button 
            onClick={() => incrementar(2)}
            className="btn btn-outline-primary mt-2">
                +2
            </button>

            <button 
            onClick={() => resetear()}
            className="btn btn-outline-danger mt-2">
                reset
            </button>
        </div>
    )
}
