import Breakingbad from"../src/Card/breakingbad";
import './App.css';
import {useState,useEffect} from "react";

const url="https://www.breakingbadapi.com/api/characters";

function App() {
  const[data,setData]=useState([]);
    useEffect(()=>{
        fetch(url)
        .then((response)=>response.json())
        .then((response)=>setData(response))
        .then((response)=>console.log(response))

        .catch();
    },[]);
  return (
    <div>
      <div className="App">
        <h1>Breaking Bad Api</h1>
      </div>
      <div className="breakingbadcard">
     
       {data.map((item)=>(
         <Breakingbad img={item.img} name={item.name} nickname={item.nickname} status={item.status} />
       ))} 
   
      </div>

  </div>

  );
}

export default App;
