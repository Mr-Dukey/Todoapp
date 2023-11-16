import React, { useReducer } from 'react'

export default function UseReducerHook() {
    const data = {
        name:'',
        age:0
    }

    const[state,dispatch] = useReducer(reduce,data);

    function reduce(state,action){

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
        }
        
    }

    function handleChange(e){
        dispatch({
            type:'change_input',
            nxtName:e.target.value
        })
    }

    function btnClick(){
        dispatch({type:'inc_age'})
    }
  return (
    <div>
        <input type="text" onChange={handleChange}/>
        <button onClick={btnClick}  >Increment Age</button>
    
    
        <h1>Name:{state.name}</h1>
        <h1>Age:{state.age}</h1>
    </div>
    
  )
}
