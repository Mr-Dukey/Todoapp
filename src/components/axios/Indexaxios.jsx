import React from 'react';


import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Adduser from './Adduser';
import EditUser from './EditUser';
import ViewUser from './ViewUser';


export default function Indexaxios() {

    
  return (
   
    <div className='indexAxios'>
        <BrowserRouter>
            <Routes>
                <Route path='/adduser' element={<Adduser/>}/>
                <Route path='/Edituser/:id' element={<EditUser/>} />
                <Route path='/' element={<ViewUser/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
