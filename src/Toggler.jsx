import { useState } from "react";

export default function Toggler(){
    const [isHappy, setIsHappy] = useState(true)

    const changeMood = () => setIsHappy(!isHappy)

    return (
        <h1 onClick={changeMood}>
{isHappy ? "Happy" : "Sad"}
        </h1>
    )
}