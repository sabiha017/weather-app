import React from "react"

function Error(props){
    return(
        <div className="alert alert-danger mx-5" role="alert">{props.error}</div>
    )
}
export default Error