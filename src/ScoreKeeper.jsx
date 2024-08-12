import { useState } from 'react';

export default function ScoreKeeper({ numPlayers = 5, target = 5 }) {
    const [scores, setScores] = useState(new Array(numPlayers).fill(0))
    const incrementScore = (idx) => {
        setScores(prevScores => {
            // const copy = [...prevScores]
            // copy[idx] += 1;
            // return copy
            return prevScores.map((score, index) => {
                if (index === idx) return score + 1;
                return score;
            })
        })
    }

    const reset  = () => {
        setScores(new Array(numPlayers).fill(0))
    }

    return (
        <div>
            {scores.map((score, idx) => {
                if (score >= target) {
                    return <h1>Player {idx + 1} is the WINNER! ;)</h1>
                }
            })}            
            <h2>Score Keeper Codealong</h2>
            <ul>
                {scores.map((score, idx) => {
                    return <li key={idx}><h3>Player {idx + 1}: {score}
                        <button onClick={() => incrementScore(idx)}>+1</button></h3></li>
                })}
                <button onClick={reset}>Reset</button>
            </ul>
        </div>
    )
}