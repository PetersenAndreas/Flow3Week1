import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function NewPerson(props) {

  const [person, setPerson] = useState(props.nextPerson);

  const savePerson = evt => {
    if (person.personText === "") {
      return;
    }
    props.addPerson(person);
    evt.preventDefault();
  };

  useEffect(() => setPerson({ ...props.nextPerson }), [props.nextPerson]);

  const onChange = evt => {
    const val = evt.target.value;
    person.personText = val;
    setPerson({ ...person });
  };
  
  return (
    <div>
      <h4>Create Person</h4>
      <form>
        
        <input value={person.personText} onChange={onChange} />
        <br/><br/>
        <button onClick={savePerson} >Save</button>
      </form>
      
    </div>
  );
}
export default NewPerson;

NewPerson.propTypes = {
  nextPerson: PropTypes.object,
  addPerson: PropTypes.func
}
