import React , {useState,useEffect}  from 'react';
import './App.css';


function Creative() {
 useEffect(() =>{

fetchItems();

 },[]);
 const[items,setItems]=useState([]);

 const fetchItems = async () =>{
const data = await fetch(
'https://api.fortnitetracker.com/v1/store');
const items = await data.json();
console.log(items);
setItems(items);

 }
 
 
 
  return (
    <div className="Creative">
     <h1>Creative</h1>
    </div>
  );
}

export default Creative;
