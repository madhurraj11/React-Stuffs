import {useState} from "react";
const countries = [
    {name : "India", value: "IN", cities: ["Mumbai", "Delhi"]},
    {name : "Canada", value: "CA", cities: ["Ottawa", "Edmonton"]},
    {name : "USA", value: "US", cities: ["Washington DC", "Los Angeles"]},
];



export default function App() {
    const [country, setCountry] = useState({name: "", value: "", cities: []});
  return (
      <div>
          <select value={country.value} onChange= {(e) => {
              const selectedCountry = countries.find(c => c.value === e.target.value);
              setCountry(selectedCountry);
          } }>
              {
                  countries.map((item, index) => {
                      return (<option key={index} value={item.value}>{item.name}</option>);
                  })
              } 
          </select> 
          <select value={country.cities[0]}>
              {
                  country.cities.map((item, index) => {
                      return (<option key={index} value={item}>{item}</option>);
                  })
              } 
          </select> 
      </div>    
  );
}

