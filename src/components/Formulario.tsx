import { ChangeEvent, useState } from "react"
import { useForm } from "../hooks/useForm"

export default function Formulario() {

    const { formulario, handleChange } = useForm({
        email: '',
        name: ''
    });

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
