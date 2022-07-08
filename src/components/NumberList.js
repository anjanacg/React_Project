import React from "react";
import Person from "./Person";
function NumberList(){


    const names=["anjana","asha","pallavi","ujwal"]
const persons=[
    {
        id:1,
        name:"anjana",
        age:20,
        skill:'React'

    },
    {
    id:2,
    name:"asha",
    age:25,
    skill:'Java'
    },

    {
        id:3,
        name:"pallavi",
        age:23,
        skill:'JavaScript'
    }
]
// const personList=persons.map(person=>
//     <Person key ={person.id} person={person}/>


const numberList=names.map((name,index)=><h2 key={index}>{index}{name}</h2>)
        

return <div>{numberList}</div>
}
export default NumberList