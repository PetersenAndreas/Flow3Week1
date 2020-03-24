import React from 'react';

import person, {males, females} from "./file2.js";
const {firstName, email} = person;

function App() {
    //See the console in the browser
    console.log([...males, ...females]);
    console.log([...males, "Kurt", "Helle" , ...females, "Tina"]);
    
    return (
      <div className="App">
        <p>FirstName: {firstName}, Email: {email}</p>
      </div>
    );
  }
  export default App;