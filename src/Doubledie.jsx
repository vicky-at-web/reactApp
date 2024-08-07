export default function DoubleDie() {
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    const result = (die1 == die2) ? 'You win :)' : 'You lose :(';
    const styles = { backgroundColor: die1 == die2 ? 'green' : 'red', color: 'white', borderRadius: '10px' }

    return (
        <div style={styles}>
            <h1>{result}</h1>
            {/* {die1 == die2 ? <h1>{result}</h1> : null} */}
            <p>Die 1: {die1}</p>
            <p>Die 2: {die2}</p>
        </div>
    )
}