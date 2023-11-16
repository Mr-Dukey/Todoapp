import React,{useState} from 'react'
import DisplayVals from './DisplayVals';

export default function UseStateHook() {

    // const [var, state changing varialbel] = useState(initial value);
    // const [sname, setSname] = useState(" ");
    // const [sname, setSname] = useState(0);
    const sname = "Hari";
    return (
        <div>
            {/* <input type='text' value={sname} onChange={(e)=>setSname(e.target.value)}/> */}

            {/* <button onClick={()=>{setSname(1)}} >Page 1</button> */}
            {/* <button onClick={()=>{setSname(2)}} >Page 2</button> */}
            <h2>Page 1</h2>
            <DisplayVals values={sname} />
        </div>
    )
}
