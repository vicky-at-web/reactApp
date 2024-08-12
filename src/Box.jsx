import { useState } from "react";

export default function Box() {
    const rand1 = Math.floor(Math.random() * 255) + 1
    const rand2 = Math.floor(Math.random() * 255) + 1
    const rand3 = Math.floor(Math.random() * 255) + 1
    const randColors = [rand1, rand2, rand3]
    const pickedColor = `rgb(${rand1}, ${rand2}, ${rand3})`


    const [color, setColor] = useState(pickedColor)
    const [index, setIndex] = useState(0)

    const changeColor = () => {
        const rand1 = Math.floor(Math.random() * 255) + 1
        const rand2 = Math.floor(Math.random() * 255) + 1
        const rand3 = Math.floor(Math.random() * 255) + 1
        const pickedColor2 = `rgb(${rand1}, ${rand2}, ${rand3})`
        setColor(pickedColor2)
        setIndex(c => c + 1)
    }


    return (
        <div onClick={changeColor} style={{ backgroundColor: color, width: '100px',borderRadius: '20px', height: '100px', display:'flex', alignItems: 'center', justifyContent: 'center' }}>
<h3>{index}</h3>
        </div>

    )
}