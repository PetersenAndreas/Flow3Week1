import React from 'react';
import PropTypes from 'prop-types';

const PersonList = ({ persons }) => {
  return (
    <React.Fragment>
      <h2>All Persons</h2>
      <ul>
        {persons.map(person => (
          <li key={person.id}>{person.personText}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};
export default PersonList;
PersonList.propTypes = {
  persons: PropTypes.array
}