import { useState } from "react"
import { User } from "../interface/User";


export default function Usuario() {

    const [user, setUser] = useState<User>();

    const login = () => {
        setUser({
            uid: 'abc123',
            name: 'Roger Manzo'
        });
    }

    return (
        <div className="mt-5">

            <h3>Usuario:</h3>


            <button
                onClick={ login }
                className="btn btn-outline-primary">
                Login
            </button>
            {
                (!user) 
                ? <pre>No hay usuario</pre>
                : <pre>{JSON.stringify(user)}</pre>
            }

        </div>
    )
}
