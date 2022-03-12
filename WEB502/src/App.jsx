import { useState } from 'react'
import ShowInfo from './components/showInfo'

function App() {
  //const products = [
  //  {id: 1, name: "Product A"},
 //   {id: 2, name: "Product B"},
  //  {id: 3, name: "Product C"},
 // ]
 const[count, setCount] = useState(0);
 const[myName, setMyName] = useState("Tuan");
 const[status, setStatus] = useState(false);
 const [products, setProducts] = useState([
     {id: 1, name: "Product A"},
     {id: 2, name: "Product B"},
     {id: 3, name: "Product C"},
 ]);
  return (
    <div>
      Count: {count} <button onClick={() => setCount(count + 1)}>Click</button>
      <hr />
      {myName} <button onClick={() => setMyName("Huong")}>Change Name</button>
      <hr />
      <button onClick={() => setStatus(!status)}>Toggled</button>
      <hr />
     {status ? products.map((item, index)=> <div key={index}>{item.name}</div>):""}
     <ShowInfo name="Tuan"/>
     <ShowInfo name="Dung"/>
     <ShowInfo name="Huong"/>
    </div>
  )
}

export default App
