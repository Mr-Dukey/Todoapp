import React from 'react'
import { colortheme } from './UseContextHook'
export default function Page2() {
  return (
    <div id={colortheme}>
        <div className={'loginbox container-md bg-'+colortheme}>
            <div className='loghead'>
                <h2>Login</h2>
            </div>
            <div className='loginp mt-5'>
                <form>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div className='row mt-5'>
                        <button type='submit' className='btn btn-danger'>Signin</button>
                    </div>
                </form>
            </div>
            <div className='signuplink row'>
                <p>Don't have Account...!</p>
                <button className='btn btn-dark' >Register</button>
            </div>
        </div>
    </div>
  )
}
