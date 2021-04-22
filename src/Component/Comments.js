import React,{useState,useEffect} from 'react'

function Comments({match}) {
    useEffect (()=>{
        fetchItem();
        console.log(match);
      
    });
    const [item,setItem]=useState({});
    const fetchItem =async ()=>{
    const fetchItem =await fetch(`https://jsonplaceholder.typicode.com/todos?UserId=${match.params.id}`)
    const item=await fetchItem.json();
    setItem(item);
    console.log(item);}

    return (
        <div key={item.id}>
           <h1>{item.Title}</h1>
           <h1>{item.Completed}</h1>
           
        </div>
    )
}

export default Comments

