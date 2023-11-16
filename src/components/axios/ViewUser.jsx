import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

export default function ViewUser() {

    const[views,setViews] = React.useState([])

    //fetch datas

    React.useEffect(()=>{
        axios.get('https://654c8c5f77200d6ba858fc38.mockapi.io/SmapleCollection')
        .then(res=> setViews(res.data))
        .catch(err => console.log(err))

    })

    //delete a user

    function deluser(id){
        axios.delete('https://654c8c5f77200d6ba858fc38.mockapi.io/SmapleCollection/'+id)
        .then(alert('data deleted'))
        .catch(err=>console.log(err))
    }

  return (
    <div>
        <Link to={'/adduser'} className='btn btn-success'>Add User</Link>
        <table className='table'>
            <thead>
               
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
               
            </thead>
            <tbody>
                {
                    views.map((items)=>{
                        return(
                            <tr>
                                <td>{items.id}</td>
                                <td>{items.Name}</td>
                                <td>{items.Email}</td>
                                <td>{items.Phone}</td>
                                <td>{items.Username}</td>
                                <td>{items.Password}</td>
                                <td>
                                    <Link className='btn btn-dark' to={'/Edituser/'+items.id}>Edit</Link>
                                    <button className='btn btn-danger' onClick={()=>{
                                        deluser(items.id)
                                    }}>Delete</button>
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
