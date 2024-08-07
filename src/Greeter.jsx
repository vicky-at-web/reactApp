///PROPS WITH STRINGS
///PROPS WITH INTEGERS ARE DONE WITH ADDING LIKE {TERM} TO ESCAPE JSX TO EXECUTE JS SYNTAXES/DATATYPES

export default function Greet(props){
    console.log(props)
    return <h1>Hiii, {props.person} </h1>
}