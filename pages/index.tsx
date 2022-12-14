import React from "react";

const Home = () => {
  return (
    <>
      {/* <div className="desktop-menu">
        <ul>
          <li>
            <a href="/" className="title">My orders</a>
          </li>
          <li>
            <a href="/">My account</a>
          </li>
          <li>
            <a href="/">Sign out</a>
          </li>
        </ul>
      </div> */}
      {/* <div className="mobile-menu">
        <ul>
          <li>
            <a href="/">CATEGORIES</a>
          </li>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Other</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">My orders</a>
          </li>
          <li>
            <a href="/">My account</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/" className="email">
              platzi@example.com
            </a>
          </li>
          <li>
            <a href="/" className="sign-out">
              Sign out
            </a>
          </li>
        </ul>
      </div> */}
      {/* <div className="my-order">
        <div className="my-order-container">
          <h1 className="title">My order</h1>

          <div className="my-order-content">
            <div className="order">
              <p>
                <span>03.25.21</span>
                <span>6 articles</span>
              </p>
              <p>$560.00</p>
            </div>

            <div className="shopping-cart">
              <figure>
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
              </figure>
              <p>Bike</p>
              <p>$30,00</p>
            </div>

            <div className="shopping-cart">
              <figure>
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
              </figure>
              <p>Bike</p>
              <p>$30,00</p>
            </div>

            <div className="shopping-cart">
              <figure>
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
              </figure>
              <p>Bike</p>
              <p>$30,00</p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="my-order">
        <div className="my-order-container">
          <h1 className="title">My orders</h1>

          <div className="my-order-content">

            <div className="order">
              <p>
                <span>03.25.21</span>
                <span>6 articles</span>
              </p>
              <p>$560.00</p>
              <img src="./icons/flechita.svg" alt="arrow" />
            </div>

          </div>
        </div>
      </div> */}
      <nav>
        <img src="./icons/icon_menu.svg" alt="menu" className="menu" />

        <div className="navbar-left">
          <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Clothes</a>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Furnitures</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <ul>
            <li className="navbar-email">platzi@example.com</li>
            <li className="navbar-shopping-cart">
              <img src="./icons/icon_shopping_cart.svg" alt="shopping cart" />
              <div>2</div>
            </li>
          </ul>
        </div>
      </nav>
      <section className="main-container">
        <div className="cards-container">
          <div className="product-card">
            <img
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <div className="product-info">
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <div className="product-info">
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <div className="product-info">
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <div className="product-info">
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <div className="product-info">
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <div className="product-info">
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <div className="product-info">
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <div className="product-info">
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <div className="product-info">
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      {/* <aside className="product-detail">
        <div className="product-detail-close">
          <img src="./icons/icon_close.png" alt="close" />
        </div>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
        <div className="product-info">
          <p>$35,00</p>
          <p>Bike</p>
          <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
          <button className="primary-button add-to-cart-button">
            <img src="./icons/bt_add_to_cart.svg" alt="add to cart" />
            Add to cart
          </button>
        </div>
        <div className="dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </aside> */}
      <aside className="product-detail">
        <div className="title-container">
          <img src="./icons/flechita.svg" alt="arrow" />
          <p className="title">My order</p>
        </div>
        <div className="my-order-content">
          <div className="shopping-cart">
            <figure>
              <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
            </figure>
            <p>Bike</p>
            <p>$30,00</p>
            <img src="./icons/icon_close.png" alt="close" />
          </div>

          <button className="primary-button">
            Checkout
          </button>
        </div>
      </aside>
      {/* <div className='login'>
        <div className='form-container'>
          <img src='./logos/logo_yard_sale.svg' alt='logo' className='logo' />
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
      {/* <h1 className="title">My account</h1>
            <form action="/"className="form">
              <div className='container-inputsform'>
                <label htmlFor="name"className="label">Name</label>
                <input type="text" id="name" placeholder="Teff"className="input input-name"/>

                <label htmlFor="email"className="label">Email</label>
                <input type="text" id="email" placeholder="platzi@example.com"className="input input-email"/>

                <label htmlFor="password"className="label">Password</label>
                <input type="password" id="password" placeholder="*********"className="input input-password"/>
              </div>
              <input type="submit" value="Create" className="primary-button login-button"/>
            </form> */}
      {/* <div>
        <label htmlFor="name" className="label">Name</label>
        <p className="value">Camila Yokoo</p>

        <label htmlFor="email" className="label">Email</label>
        <p className="value">camilayokoo@gmail.com</p>

        <label htmlFor="password" className="label">Password</label>
        <p className="value">*********</p>
        <button className="secondary-button signup-button">Edit</button>
      </div>
    </div>
      </div > */}
    </>
  );
};

export default Home;
