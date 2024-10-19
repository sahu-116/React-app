import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Signup() {
    return (
        <>
        <div style={{ margin: '50px' }}>
            <form>
                <label>Name:</label>
                <input type='text' name='name' />
                <br />
                <label>Email:</label>
                <input type='email' name='email'  required />
                <br />
                <label>Password:</label>
                <input type='password' name='password'  required />
                <br />
                <label>Age:</label>
                <input type='number' name='age'  required />
                <br />
                <label>Salary:</label>
                <input type='number' name='salary'  required />
                <br />
                <input type='submit' name='btn' value='Register' />
            </form>
            </div>
        </>


    )
}
