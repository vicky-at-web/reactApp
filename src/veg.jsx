////PROPS WITH ARRAYS AND OBJECTS

///PROPS WITH ARRAY AS A PARAMETER
// export default function Veggie({list}){
//     const randIndex = Math.floor(Math.random() * list.length)
//     const pickedItem = list[randIndex]

//     return <h3>The picked Veggie is {pickedItem}</h3>
// }


///PROPS WITH OBJECTS AS A PARAMETER

export default function Veggie({ list }) {
    const pickedItem = list.a
    return <h3>The picked Veggie is {pickedItem}</h3>
}