


export default function Clicker({key=1,message, text}){
    return (
        <button key={key} onClick={() => alert(message)}>{text}</button>
    )
}