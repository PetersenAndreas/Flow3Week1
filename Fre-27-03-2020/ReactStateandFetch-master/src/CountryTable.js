import React from "react";

const CountryTable = ({lData, cData}) => {
  console.log(lData);  
  console.log(cData);
  
  const moreThanOne = array => {
    if(array.length > 1){
      return <>{array[0]} (+{array.length - 1})</>;
    } else{
      return <>{array[0]}</>
    }
  }  
  return (
      <div>
      <p>Replace the thead section with a row generated from the Labels endpoint</p>
      <p>Replace the tbody section with rows generated from the countries endpoint</p>
      <table className="table">
        <thead>
        <tr>
        {lData.map((l, index) => {
          return (
              <th key={index}>{l}</th>
          );
        })}
        </tr> 
        </thead>
        
        <tbody>
        {cData.map((c) => {
          return (
            <tr key={c.name}>
              <td>{c.name}</td>
              <td>{c.capital}</td>
              <td>{c.region}</td>
              <td>{c.population}</td>
              <td>{c.area}</td>
              <td>{moreThanOne(c.timezones)}</td>
              <td>{moreThanOne(c.borders)}</td>
              <td>{moreThanOne(c.topLevelDomain)}</td>
              <td>{moreThanOne(c.currencies)}</td>
              <td>{moreThanOne(c.languages)}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
      </div>
    );
};
export default CountryTable;