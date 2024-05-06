import { ChangeEvent, useState } from "react"

export default function Formulario() {

    const [formulario, setFormulario] = useState({
        email: '',
        name: ''
    });

    const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = target;

        setFormulario({
            ...formulario,
            [ name ]: value
        });
    }

    return (
        <form autoComplete="off">

            <div className="mb-3">
                <label className="form-label">Email:
                    <input
                        type="email"
                        className="form-control" 
                        name="email"
                        onChange={handleChange}
                        />
                </label>
            </div>

            <div className="mb-3">
                <label className="form-label">Nombre:
                    <input
                        type="text"
                        className="form-control" 
                        name="name"
                        onChange={handleChange}
                        />
                </label>
            </div>

            <pre>{JSON.stringify(formulario)}</pre>
        </form>
    )
}
