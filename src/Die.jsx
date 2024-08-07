///SIMPLE COMPONENT


export default function Die(){
    const num = Math.floor(Math.random() * 6) + 1
    return <p>Die rolled to:{num}</p>
}