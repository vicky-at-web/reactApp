import { useState } from "react";
import ShopList from "./ShopList";

export default function ShoppingItems(){

    const [items, setItems] = useState([
        {id: 1, product: "carrot", qty: 3},
        {id: 2, product: "banana", qty: 5}
    ])

const addItems = (item) => {
    setItems(currItems =>{
        return [
            ...currItems,
            {...item, id: 9}
        ]
    })
}


    return (
        <div>
           {items.map(item => {
           return  <li key={item.id}>{item.product} - {item.qty}</li>
           })}
           <ShopList addItems={addItems}/>
        </div>
    )
}