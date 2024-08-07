import './App.css'

import { useState } from 'react'
import Greet from './Greeter';
import Die from './Die';
import Veggie from './veg';
import DoubleDie from './Doubledie';
import Heading from './Heading'
import ColorList from './ColorList';
import ShoppingList from './ShoppingList';
import Clicker from './Clicker';
import Incrementer from './IncrementBtn';
import Toggler from './Toggler';
import Box from './Box';
import ColorBox from './Colorbox';

const data = [
  { id: 1, name: 'carrot', quantity: 5, completed: true },
  { id: 2, name: 'bread', quantity: 2, completed: false },
  { id: 3, name: 'potato', quantity: 4, completed: true },
  { id: 4, name: 'eggs', quantity: 3, completed: false },
  { id: 5, name: 'ghee', quantity: 1, completed: true }
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ColorBox />

        {/*<Incrementer/>
         <Clicker text='click me' message='Hello react!'/>
        <Heading color='#646cff' text='Hello React!!'/>
        <Greet person='Vignesh'/>
        <Greet person='Raj karan'/>
        <Greet person='Joshua'/>
        <Greet person='Thiru'/>
        <Die/>
        <ColorList colors={['magenta', 'purple', 'orangered']}/>
        <DoubleDie/>
        <ShoppingList items={data}/>,
        <Veggie list={{a: 'apple', b:'beans'}}/>
        <h1>Hello world!!!!!</h1> */}
      </div>
    </>
  )
}

export default App
