import React from 'react'

const Home = () => {
  return (
    <>
        <div className='login'>
          <div className='form-container'>
            <img alt='logo' className='logo'/>
            <h1 className='title'>Create a new password</h1>
            <p className='subtitle'>Enter a new password for you account</p>
            <form className='form'>
              <label  htmlFor='passwrd' className='label'>Password</label>
              <input type='password' id='passwrd' placeholder='*********' className='input input-password'/>
              <label  htmlFor='new-passwrd' className='label'>Password</label>
              <input type='password' id='new-passwrd' placeholder='*********' className='input input-password'/>
              <input type='sumbit' value='Confirm' className='primary-button login-button'/>
            </form>
          </div>
        </div>
    </>
  )
}

export default Home