import "./SingleDie.css"

export default function SingleDie({ val, color }) {
    return (
        <div className="SingleDie" style={{backgroundColor: color}}>
            {val}
        </div>
    )
}