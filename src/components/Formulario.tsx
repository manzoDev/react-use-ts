import { useForm } from "../hooks/useForm"
import { Form } from "../interface/Form";

export default function Formulario() {

    const { formulario, handleChange } = useForm<Form>({
        email: 'example@gmail.com',
        name: 'jhon'
    });

    //destructuramos 
    const { email, name } = formulario

    return (
        <form autoComplete="off">

            <div className="mb-3">
                <label className="form-label">Email:
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={email}
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
                        value={name}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <pre>{JSON.stringify(formulario)}</pre>
        </form>
    )
}
