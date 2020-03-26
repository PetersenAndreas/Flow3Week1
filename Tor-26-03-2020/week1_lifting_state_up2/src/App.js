import React, {useState} from "react";
import PersonsList from "./PersonsList"
import NewPersons from "./NewPersons"
import uuid from "uuid/v1";
import "./App.css";

function App() {
  const initialData = [
    { id: uuid(), personText: "Jan" },
    { id: uuid(), personText: "Ole" },
    { id: uuid(), personText: "Jens" }
  ]
  const [persons, setPersons] = useState(initialData);
  const [newPerson, setNewPerson] = useState({ id: "", personText: "" });
  console.log(persons)

  const addPerson = person => {
    if (person.id === "") {
      person.id = uuid();
      persons.push(person);
    }
    setPersons([...persons]);
    setNewPerson({id:"", personText:""})
  };
  
  return (
    <div style={{alignContent:"center", display: 'flex',  justifyContent:'center', alignItems:'center', marginTop: "100px"}}>
      <div style={{float: "left", padding: "20px", border: "2px solid black", width: "250px", }}>
          <PersonsList persons={persons} />
          <p>Total Persons: {persons.length}</p>
      </div>
      <div style={{float: "left", padding: "47px", border: "2px solid black", width: "200px", marginLeft: "10px"}}>
          <NewPersons
            addPerson={addPerson}
            nextPerson={newPerson}/>       
      </div>
    </div>
  );
}
export default App;