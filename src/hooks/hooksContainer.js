import React, { useState, useEffect } from 'react';


//main app 
const HooksContainer = () => {


    const [stateValue, setValue] = useState(0)
    const [useEffectValue, setUseEffectValue] = useState(null)

    useEffect(()=>{
        setTimeout(() => setUseEffectValue("useEffect worked"), 3000)
    }, [])

    const incrementValue = () =>{
        setValue(stateValue + 1)
    }

    const decrementValue = () =>{
        setValue(stateValue - 1)
    }

    return(
      <div>
      hooks
        <br/>
        <button onClick={ () => incrementValue()}> Inc value</button>
        <button onClick={ () => decrementValue()}> Dec value</button>
        <br/>
        <div>
            <br/>
            {useEffectValue
                ? <p>{useEffectValue} </p>
                : <p>No value</p>
            }
            <br/>
            <p>Local state: {stateValue}</p>
        </div>
      </div>
    )
}


export default HooksContainer;
