import React, { useEffect, useState } from "react";
import "./css/style.css";

const Starter = () => {

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

useEffect(() => {
  const fetchApi = async() => {
const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8aa3173909bfda6625f0a521af325773`
const response = await fetch(url);
const resJson = await response.json();  
setCity(resJson.main);
}
fetchApi();
},[search])

    return(
        <>
          <div className="box">
            
            <div className="inputData">
                <input 
                placeholder="Search for Country | City"
                type="search" 
                className="inputField"
                onChange={(event) => {setSearch(event.target.value)}}>
                </input>
            </div>
{!city ? (
<p className="errorMsg">No Data Found</p>
): (
  <div>
          <div className="info">
            <h2 className="location">
            <i className="fas fa-street-view"></i> {search}
            </h2>
            <h1 className="temp">
               {city.temp}°C
              </h1>
              <h3 className="tempmin_max"> Min : {city.temp_min}°C | Max : {city.temp_max}°C</h3>
          </div>

          <div className="wave -one"></div>
          <div className="wave -two"></div>
          <div className="wave -three"></div>
  </div>
)}

  </div>

</>
    )
}

export default Starter;