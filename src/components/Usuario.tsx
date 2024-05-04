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

            <h3>Usuario: useState</h3>


            <button className="btn btn-outline-primary">
                Login
            </button>

            <pre>{JSON.stringify(user)}</pre>

        </div>
    )
}
