import React, {useContext} from "react"
import Context from "../Context"

function Display(){
    const {weather, city, country, description} = useContext(Context)
    const {temp, feels_like, temp_max, temp_min} = weather

    return (

    <div className="container">
        <div className= "card ">
        <h2 className="py-3"> <span className="weather-data__city">{city} {country}</span></h2>
        <h3 className="py-2">{description}</h3>
        <h4 className="py-2">
        <p>{temp}{'\u00b0'}</p></h4>
        <h4><span>Feels Like</span></h4>
        <h5><p>{feels_like}</p></h5>
        <h5>
        <span className="px-4">{temp_max}{'\u00b0'}</span>
        <span className="px-4">{temp_min}{'\u00b0'}</span>
        </h5>
        

    </div>
      </div>






    )
}
export default Display