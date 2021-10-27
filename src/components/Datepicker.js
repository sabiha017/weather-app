import React from "react"

function Datepicker()  {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = Date().toLocaleString('en-US', options)
  

  return (
    <div className="date-time">
      <h1>{ date.slice(0, 15)}</h1>
      
    </div>
  )
}

export default Datepicker