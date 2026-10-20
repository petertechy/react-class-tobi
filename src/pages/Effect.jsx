// import React from 'react'

import { useEffect, useState } from "react"

const Effect = () => {
    const [number, setnumber] = useState(2)
    

    useEffect(() => {
      console.log("Component Mounts")

       return () => {
        console.log("Component Unmounts")
      }
    },[number])

    const increaseNumber = () =>{
        setnumber(number+1)
    }
    
  return (
    <div>
        <h1>Use Effect Class - {number}</h1>
        <button onClick={() => increaseNumber()}>Increase Number</button>

    </div>
  )
}

export default Effect