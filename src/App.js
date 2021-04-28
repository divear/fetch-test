import React, {useState, useEffect} from 'react'
import './App.css';


function App() {

  const [count,setCount] = useState(0);

  useEffect(async() => {
    document.title = `you clicked ${count} times`;
  },[count])

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={()=> setCount(count+1)}>+</button>
    </div>
  );
}

export default App;
