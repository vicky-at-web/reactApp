import SingleDie from "./SingleDie";

export default function Dice({dice, color="slateblue"}){
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            {dice.map(die => {
                return <SingleDie val={die} color={color}/>

            })}
        </div>
    )
}