import React, { useEffect, useState } from 'react'

export default function UseEffectHook() {
    //Syntax
    //useEffect(function(){
    //   Statement
    // },[dependecies])

    const[vals1,setVals1] = useState([]);
    

    useEffect(()=>{
        fetch('https://64e6eb17b0fd9648b78f0ce6.mockapi.io/task1')
        .then(res => res.json())
        .then(resdata => setVals1(resdata))
        .catch(error => console.log(error));

    },[])
  return (

    <div>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Eg</th>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {
              vals1.map((items)=>{
                return(
                  <tr>
                    <td>{items.id}</td>
                    <td>{items.key}</td>
                    <td>
                      <button className='btn btn-dark'>Update</button>
                      <button className='btn btn-danger'>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
  )
}
