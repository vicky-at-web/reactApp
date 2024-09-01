import { useForm } from "react-hook-form";

export default function Formex() {
    let datas;
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({ mode: "onChange" });

    const handleRegistration = (formData) => {
        datas = formData
        console.log('Form submitted')
        console.log(formData)
        console.log(handleSubmit)
        reset()
    }

    const handleErrors = (err) => {
        console.log(err)
    }

    const registerOptions = {
        name: { required: 'Name cannot be blank' },
        email: { required: 'Email cannot be blank' },
        password: {
            required: "Password is required",
            minLength: {
                value: 10,
                message: "password must be at least 10 characters"
            },
        }
    }

    return (
        <form onSubmit={handleSubmit(handleRegistration, handleErrors)}>
            <div>
                <label htmlFor="name">Username: </label>
                <input
                    name="name"
                    {...register("name", registerOptions.name)}
                    type="text" />
                <small className="text-danger">
                    {errors?.name && errors.name.message}
                </small>
            </div>
            <div>
                <label htmlFor="email">E-Mail: </label>
                <input
                    name="email"
                    {...register("email", registerOptions.email)}
                    type="email" />
                <small className="text-danger">
                    {errors?.email && errors.email.message}
                </small>
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input
                    name="password"
                    {...register("password", registerOptions.password)}
                    type="password" />
                <small className="text-danger">
                    {errors?.password && errors.password.message}
                </small>
            </div>
            <button>Submit</button>
        </form>
    )
}