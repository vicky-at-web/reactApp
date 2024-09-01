import { useState, useEffect } from 'react';

export default function Effects() {
    const [count, setCount] = useState(0);

    useEffect(function welcome() {
        console.log('HIIIII from use effects')
    })

    const increment = () => {
        setCount(c => c + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+ 1</button>
        </div>
    )
}