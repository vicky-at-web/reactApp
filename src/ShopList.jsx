import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ShoppingItems from './ShoppingItems';


export default function ShopList({ addItems }) {
    const [Data, setData] = useState({ product: "", qty: 0 })
    const [error, setError] = useState(false)

    const validateData = (product) => {
        if (product.length === 0 ) {
            setError(false)
            return;
        } else {
            setError(true)
        }
    }

    const handleChange = (evt) => {
        validateData(evt.target.value)
        setData(currData => {
            return {
                ...currData, [evt.target.name]: evt.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (error) {
            addItems(Data);
            setData(currData => {
                return { product: "", qty: 0 }
            })
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>

                {!error && <h1 style={{ color: "red" }}>Product cannot be empty and quantity must be above 0</h1> || <h1>Product is {Data.product}, quantity is {Data.qty}</h1>}
                <label htmlFor="product">Product Name: </label>
                <input
                    onChange={handleChange}
                    name='product'
                    id='product'
                    value={Data.product}
                    type="text" />
                <label htmlFor="qty">Quantity</label>
                <input
                    onChange={handleChange}
                    name='qty'
                    id='qty'
                    value={Data.qty}
                    type="number" />
                <button type='submit' disabled={!error}>Submit</button>
            </form>
        </>
    )
}
