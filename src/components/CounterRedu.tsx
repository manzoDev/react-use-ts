import { useReducer } from "react";
import { ActionType } from "../types/ActionType";


export default function CounterRedu() {

    const initialState = {
        contador: 0
    }

    //Reducer siempre retorna un state nuevo
    const contadorReducer = (state: typeof initialState, action: ActionType) => {
        switch (action.type) {
            case 'incrementar':
                return {
                    ...state,
                    contador: state.contador + 1
                }
            case 'disminuir':
                return {
                    ...state,
                    contador: state.contador - 1
                }
            case 'custom':
                return {
                    ...state,
                    contador: action.payload
                }
            default:
                return state;
        }
    }

    const [{ contador }, dispatch] = useReducer(contadorReducer, initialState)


    return (
        <>
            <h2>Contador: {contador}</h2>

            <button
                onClick={() => dispatch({ type: 'incrementar' })} // dispatch de una acción
                className="btn btn-outline-primary">
                +1
            </button>

            <button
                onClick={() => dispatch({ type: 'disminuir' })} // dispatch de una acción
                className="btn btn-outline-primary">
                -1
            </button>

            <button
                onClick={() => dispatch({ type: 'custom', payload: 100 })} // dispatch de una acción
                className="btn btn-outline-danger">
                custom
            </button>
        </>
    )
}
