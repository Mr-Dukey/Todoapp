import React, { useRef } from 'react'

export default function UseRefHook() {


    /*
        UseRef Syntax:
            variable = useRef(initial value)
    */
    const RefVal = useRef(null);

    const inpVal = useRef(" ");
    const outVal = useRef("")
    function ChangeColor(){
        var r = Math.floor(Math.random()*255+1)
        var g = Math.floor(Math.random()*255+1)
        var b = Math.floor(Math.random()*255+1)

        const rgb = `rgb(${r},${g},${b})`;

        var r1 = Math.floor(Math.random()*255+1)
        var g1 = Math.floor(Math.random()*255+1)
        var b1 = Math.floor(Math.random()*255+1)
        const rgb1 = `rgb(${r1},${g1},${b1})`;

        RefVal.current.style.backgroundColor = rgb;
        RefVal.current.style.color = rgb1;
        console.log(RefVal.current);

        const inputvariable = inpVal.current.value;
        outVal.current.innerHTML = inputvariable;

    }
  return (
    <div>
        <h1>UseRef</h1>
        <div ref={RefVal}>
            <h2 ref={outVal}></h2>
        </div>
        <input type="text" ref={inpVal}/>
        <button onClick={ChangeColor}>Change color</button>
    </div>
  )
}
