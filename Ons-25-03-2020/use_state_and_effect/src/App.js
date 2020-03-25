import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>1.a</p>
      <CountUpAndDown></CountUpAndDown>
      <p>1.c</p>
      <CountUpAndDownV2 start="202"></CountUpAndDownV2>
      <p>2.a</p>
      <Clock></Clock>
      <p>3.a</p>
      <ShowJoke></ShowJoke>
    </div>
  );
}

//Exercise 1
function CountUpAndDown() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* 1.a */}
      <button onClick={() => setCount(count + 1)}>
        Click me to go up
      </button>
      {/* 1.b */}
      <button onClick={() => setCount(count - 1)}>
        Click me to go down
      </button>
    </div>
  );
}

function CountUpAndDownV2(props) {
  const [count, setCount] = useState(props.start);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* 1.c */}
      <button onClick={() => setCount(+count + +props.start)}>
        Click me to go up by {props.start}
      </button>
      {/* 1.c */}
      <button onClick={() => setCount(count - props.start)}>
        Click me to go down by {props.start}
      </button>
      <br/>
      <button onClick={() => setCount(count + 1)}>
        Click me to go up by one
      </button>
      {/* 1.b */}
      <button onClick={() => setCount(count - 1)}>
        Click me to go down by one
      </button>
    </div>
  );
}

//Exercise 2
function Clock() {
  var [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
      const interval = setInterval(() => {
          setTime(new Date().toLocaleTimeString());
      }, 1000);
      return () => clearInterval(interval);
  }, []);

  return <h1>Time is: {time}</h1>;
}

//Exercise 3
function ShowJoke() {
  
  const[data, setData] = useState([]);
  const handleClick = () => {
      fetch("https://api.chucknorris.io/jokes/random")
      .then(res=>res.json())
      .then(joke => {
        setData(joke);
      });
  };
  
  return (
    <div>
    <button onClick={handleClick}>Get Chuck Joke</button>
    <p>{data.value}</p>
    </div>
  );

}


export default App;
