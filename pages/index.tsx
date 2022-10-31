import React from 'react'

const Home = () => {
  return (
    <>
        <div className='login'>
          <div className='form-container'>
            <img src='./logos/logo_yard_sale.svg' alt='logo' className='logo'/>
            {/* <h1 className='title'>Create a new password</h1>
            <p className='subtitle'>Enter a new password for you account</p>
            <form className='form'>
              <label  htmlFor='passwrd' className='label'>Password</label>
              <input type='password' id='passwrd' placeholder='*********' className='input input-password'/>
              <label  htmlFor='new-passwrd' className='label'>Password</label>
              <input type='password' id='new-passwrd' placeholder='*********' className='input input-password'/>
              <input type='sumbit' value='Confirm' className='primary-button login-button'/>
            </form> */}
            {/* <h1 className="title">Email has been sent!</h1>
            <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>

            <div className="email-image">
              <img src="./icons/email.svg" alt="email"/>
            </div>

            <button className="primary-button login-button">Login</button>

            <p className="resend">
              <span>Didn't receive the email?</span>
              <a href="/">Resend</a>
            </p> */}
            {/* <form action="/" className="form">
              <label htmlFor="email" className="label">Email address</label>
              <input type="text" id="email" placeholder="platzi@example.cm" className="input input-email"/>

              <label htmlFor="password" className="label">Password</label>
              <input type="password" id="password" placeholder="*********" className="input input-password"/>

              <input type="submit" value="Log in" className="primary-button login-button"/>
              <a href="/">Forgot my password</a>
            </form>

            <button className="secondary-button signup-button">Sign up</button> */}
            <form action="/"className="form">
              <div>
                <label htmlFor="name"className="label">Name</label>
                <input type="text" id="name" placeholder="Teff"className="input input-name"/>

                <label htmlFor="email"className="label">Email</label>
                <input type="text" id="email" placeholder="platzi@example.com"className="input input-email"/>

                <label htmlFor="password"className="label">Password</label>
                <input type="password" id="password" placeholder="*********"className="input input-password"/>
              </div>
              <input type="submit" value="Create" className="primary-button login-button"/>
            </form>
          </div>
        </div>
    </>
  )
}

export default Home