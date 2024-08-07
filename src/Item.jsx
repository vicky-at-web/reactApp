export default function Item({id,quantity, name, completed}){
    return (
        <li key={id} style={{color: completed ? 'green' : 'red', textDecoration: completed ? 'line-through' : 'none'}}>{name} - {quantity}</li>
    )
}