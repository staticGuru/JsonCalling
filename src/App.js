import React,{useState, useEffect} from 'react';
import './App.css';

import Comments from './Component/Comments';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

function Posts(){
  useEffect(() =>{
    fetchItems();
  },[]);
  const [items, setItems]=useState([]);
  const fetchItems =async () =>{
    const data=await fetch('https://jsonplaceholder.typicode.com/comments');
    const items=await data.json();
    console.log(items);
    setItems(items);
  }
  return(
    <div>
    {items.map(item =>(<h1 key={item.id}><Link to={`/comments/${item.id}`}>{item.email}</Link></h1>))}
    </div>
  )
  

}
  

function App() {
  
  return(
   
    <Router> 
    <div>
        <Switch>
        <Route path="/" exact component={Posts}/>
        <Route path="/comments/:id" component={Comments}/>
        </Switch>
        </div>
    </Router>
    
  )



}



export default App;
