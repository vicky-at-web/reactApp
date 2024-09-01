import { useState } from "react"




export default function Form() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: ""
    })

    const handleChange = (evt) => {
        const changeField = evt.target.name;
        const newValue = evt.target.value
        console.log(changeField, newValue)
        setFormData(currData => {
            currData[changeField] = newValue
            return { ...currData }
        })
    }

    return (

        <div>

            <label htmlFor="username">Enter your firstname:</label>
            <input type="text" id="username" value={formData.firstname} onChange={handleChange} name="firstname" />
            <label htmlFor="password">Enter your lastname</label>
            <input type="text" id="password" value={formData.lastname} onChange={handleChange} name="lastname" />

        </div>

    )
}

