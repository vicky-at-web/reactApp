import Item from './Item'
export default function ShoppingList({ items }) {
return (

    <ul>
        {items.map(item =>
            <Item
             key={item.id} {...item}
             />
        )}
    </ul>

)
}