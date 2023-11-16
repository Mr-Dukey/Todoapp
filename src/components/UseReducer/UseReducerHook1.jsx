import React, { useReducer } from 'react'

export default function UseReducerHook1() {
    const data = {
        name:'',
        age:0
    }

    const [state,dispatch] = useReducer(Reducer,data);

    function Reducer(state,action){
        switch(action.type){
            case 'change_input':
                return{
                    name:action.nxtName,
                    age:state.age
                }
            case 'inc_age':
                return{
                    name:state.name,
                    age:state.age+1
                }
            case 'dec_age':
                return{
                    name:state.name,
                    age:state.age-1
                }    
        }
    }

  return (
    <div>
        <input type="text" onChange={(e)=>{
            dispatch({
                type:'change_input',
                nxtName:e.target.value
            })
        }}/>
        <button onClick={()=>{
            dispatch({
                type:'inc_age'
            })
        }}>Increment Age</button>
        <button onClick={()=>{
            dispatch({
                type:'dec_age'
            })
        }}>Decrement Age</button>

        <h1>Name:{state.name}</h1>
        <h1>Age:{state.age}</h1>
    </div>
  )
}
