import { useState } from "react";

export default function Incrementer(){
    const [count, setCount] = useState(5)
    const changeNum = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={changeNum}>Click to count</button>
        </div>
    )
}