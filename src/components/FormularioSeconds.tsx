import { useForm } from "../hooks/useForm"
import { FormS } from "../interface/FormS";

export default function FormularioSS() {

    const { formulario, handleChange } = useForm<FormS>({
        age: 25,
        role: 'software dev'
    });

    //destructuramos 
    const { age, role } = formulario;

    return (
        <form autoComplete="off">

            <div className="mb-3">
                <label className="form-label">Age:
                    <input
                        type="number"
                        className="form-control"
                        name="age"
                        value={age}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div className="mb-3">
                <label className="form-label">Role:
                    <input
                        type="text"
                        className="form-control"
                        name="role"
                        value={role}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <pre>{JSON.stringify(formulario)}</pre>
        </form>
    )
}
