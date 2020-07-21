import React, { useState, useEffect, useReducer } from 'react';
import * as Reducer from '../store/hook_state/hooks_reducer';
import * as ACTIONS from '../store/actions/actions';


//main app 
const HooksContainer = () => {


    const [stateValue, setValue] = useState(0)
    const [useEffectValue, setUseEffectValue] = useState(null)

    const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState)

    useEffect(()=>{
        setTimeout(() => setUseEffectValue("useEffect worked"), 3000)
    }, [stateValue])

    const incrementValue = () =>{
        setValue(stateValue + 1)
    }

    const decrementValue = () =>{
        setValue(stateValue - 1)
    }

    const changeuseEffectValue = () =>{
        setUseEffectValue('some string')
    }

    const handleDispatchTrue = () =>{
        dispatch(ACTIONS.success())
    }

    const handleDispatchFalse = () =>{
        dispatch(ACTIONS.failure())
    }

    return(
      <div>
      hooks
        <br/>
        <button onClick={ () => incrementValue()}> Inc value</button>
        <button onClick={ () => decrementValue()}> Dec value</button>
        <button onClick={ () => changeuseEffectValue()}> change use effect </button>
        <button onClick={ () => handleDispatchTrue()}> dispatch true </button>
        <button onClick={ () => handleDispatchFalse()}> dispatch false </button>

        <br/>
        <div>
            <br/>
            {useEffectValue
                ? <p>{useEffectValue} </p>
                : <p>No value</p>
            }
            <br/>
            {
                state.stateprop1 ? <p> es true </p>
                                 : <p> es false </p>
            }
            <br/>
            <p>Local state: {stateValue}</p>
        </div>
      </div>
    )
}


export default HooksContainer;
