import React , {useContext} from "react"
import Context from "../Context"


function Weathersearch(){
    const {handlesubmit}= useContext(Context)
    return(
        
        <div className="container h-100">
        <form  onSubmit={handlesubmit}>
          <div className="row">
            <div className="col-md-3 offset-md-2">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                name="city"
                autoComplete="off"
              />
            </div>
            <div className="col-md-3"> 
             
              <input 
                type="text"
                className= "form-control"
                placeholder="Country"
                name="country"
                autoComplete="off"/>
              
            
            </div>
            
            <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
              <button className="btn btn-warning">Get Weather</button>
            </div>
          
        </div>
        </form>
      </div>
    )
}
export default Weathersearch