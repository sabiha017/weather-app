import React, {useState} from "react"
import "./App.css"
import "../styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
import Context from "../Context"
import Datepicker from "./Datepicker"
import Weathersearch from "./Weathersearch"
import Display from "./Display"
import Error from "./Error"
import Footer from "./Footer"


function App(){

    const [city, setCity]= useState("")
    const [country, setCountry]= useState("")
    const [weather, setWeather]= useState("")
    const [error, setError]=useState("")
    const [description, setDescription]=useState("")
    
    const handlesubmit = async e => {
        e.preventDefault()

        const location_city = e.target.elements.city.value
        const location_country = e.target.elements.country.value
        if (location_city && location_country) {
        
        const API_KEY = "543ec108836f6c0e15c8d213b8fa0606"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location_city}, ${location_country}&appid=${API_KEY}&units=metric`
        const request = axios.get(url)
        const response = await request

        

        setCity(response.data.name)
        setCountry(response.data.sys.country)
        setWeather(response.data.main)
        setError("")
        setDescription(response.data.weather[0].description)
        
        
    }
    else{
        return (setError("Please enter the name of the city and country") ,
          setWeather("")) 
    }
      }
    
    return(
        <React.Fragment>
    <div className= "App">
       
    <Context.Provider value={{ handlesubmit, city, country, weather, description}}>  
    <Datepicker/>
     <Weathersearch/>
     { error ?
             <Error error={error} /> :null }  
       {weather &&
        <Display /> }
        </Context.Provider>
        <Footer/>

            
           
        
    </div>
    </React.Fragment>

    )
}
export default App