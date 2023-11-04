import Navbar from "../components/navbar";

/* eslint-disable react/no-unescaped-entities */
const Home = () => {
  return (
    <>
    <Navbar />
      {/* <div className="wrapper">
        <span className="icon-close">
          <ion-icon name="close"></ion-icon>
        </span>
        <div className="form-box login">
          <h2>Login</h2>
          <form action="#">
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <div className="login-register">
              <p>
                Don't have an account?{" "}
                <a href="#" className="register-link">
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className="form-box register">
          <h2>Registration</h2>
          <form action="#">
            <div className="input-box">
              <span className="icon">
                <ion-icon name="person"></ion-icon>
              </span>
              <input type="text" required />
              <label>Username</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />I agree to the terms & conditions
              </label>
            </div>
            <button type="submit" className="btn">
              Register
            </button>
            <div className="login-register">
              <p>
                Already have an account?{" "}
                <a href="#" className="login-link">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div> */}
{/* 
      <section className="home" id="home">
        <div className="text">
          <h1>
            <span>Looking </span> to <br />
            rent anthing?
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adi <br /> pisicing elit.
            Consectetur, eos atque!
          </p>
        </div>
        <div className="form-container">
          <form action="">
            <input
              type="submit"
              name=""
              id=""
              className="btn"
              value="Try It Out!"
            />
          </form>
        </div>
      </section>

      <section className="rent" id="rent">
        <div className="heading">
          <span>How It Work's</span>
          <h1>Rent with 3 Easy Steps</h1>
        </div>
        <div className="rent-container">
          <div className="box">
            <i className="bx bxs-map"></i>
            <h2>Choose A Location</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut iste
              delectus sequi provident, inventore animi?
            </p>
          </div>
          <div className="box">
            <i className="bx bxs-calendar-check"></i>
            <h2>Pick-Up Date</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut iste
              delectus sequi provident, inventore animi?
            </p>
          </div>
          <div className="box">
            <i className="bx bxs-calendar-star"></i>
            <h2>Rent An Item</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut iste
              delectus sequi provident, inventore animi?
            </p>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="heading">
          <span>Best Services</span>
          <h1>
            Explore Our Top Deals <br /> From Our Top Rated Users
          </h1>
        </div>
        <div className="services-container">
          <div className="box">
            <div className="box-img">
              <img src="electronics.jpg" alt="" />
            </div>
            <p>Electronics and Gadgets for rent</p>
            <h3>Rent Electronics & Gadgets for a smart living!</h3>
            <a href="#" className="btn">
              Rent Now
            </a>
          </div>

          <div className="box">
            <div className="box-img">
              <img src="home.jpg" alt="" />
            </div>
            <p>Rent things for your Home and Furniture</p>
            <h3>Home & Furniture</h3>
            <a href="#" className="btn">
              Rent Now
            </a>
          </div>

          <div className="box">
            <div className="box-img">
              <img src="outdoor.jpg" alt="" />
            </div>
            <p>Rent things for your outdoor Space and Sports !</p>
            <h3>Outdoor & Sports</h3>
            <a href="#" className="btn">
              Rent Now
            </a>
          </div>

          <div className="box">
            <div className="box-img">
              <img src="fashion.jpg" alt="" />
            </div>
            <p>Rent Fashion and Accessories reated to it!</p>
            <h3>Fashion & Accessories</h3>
            <a href="#" className="btn">
              Rent Now
            </a>
          </div>

          <div className="box">
            <div className="box-img">
              <img src="tools.jpg" alt="" />
            </div>
            <p>Tools and Equipments for rent in your daily life!</p>
            <h3>Tools & Equipments</h3>
            <a href="#" className="btn">
              Rent Now
            </a>
          </div>

          <div className="box">
            <div className="box-img">
              <img src="vechicles.jpg" alt="" />
            </div>
            <p>Vechicles and Transportation for rent in your daily life!</p>
            <h3>Vechicles & Transportation</h3>
            <a href="#" className="btn">
              Rent Now
            </a>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="heading">
          <span>About Us</span>
          <h1>Best Customer Experience</h1>
        </div>
        <div className="about-container">
          <div className="about-img">
            <img src="sample.png" alt="" />
          </div>
          <div className="about-text">
            <span>About Us</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
              sint incidunt. Nihil assumenda hic laborum libero quasi maxime
              tenetur, quidem amet eos et facere voluptas aliquid quisquam vero.
              Quaerat consequatur soluta consequuntur tempora maxime!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ad
              ratione iste quibusdam praesentium ipsa vel tenetur autem?
            </p>
            <a href="#" className="btn">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="reviews" id="reviews">
        <div className="heading">
          <span>Reviews</span>
          <h1>What Our Customers Say</h1>
        </div>
        <div className="reviews-container">
          <div className="box">
            <div className="rev-img">
              <img src="c1.png" alt="" />
            </div>
            <h2>Customer's Name</h2>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              expedita laborum, animi pariatur esse obcaecati delectus quam
              commodi!
            </p>
          </div>

          <div className="box">
            <div className="rev-img">
              <img src="c2.png" alt="" />
            </div>
            <h2>Customer's Name</h2>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit at
              nemo voluptatem. Quae ea earum veritatis dolores quos.
            </p>
          </div>

          <div className="box">
            <div className="rev-img">
              <img src="c3.png" alt="" />
            </div>
            <h2>Customer's Name</h2>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              facere quibusdam incidunt ea? Doloribus illo ducimus doloremque
              beatae.
            </p>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <h2>Subscribe To Our Newsletter</h2>
        <div className="box">
          <input type="text" placeholder="Enter Your Email..." />
          <a href="#" className="btn">
            Subscribe
          </a>
        </div>
        <br />
      </section>
      <div className="copyright">
        <p>&#169; Rent360 All Rights Reserved</p>
        <div className="social">
          <a href="#">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#">
            <i className="bx bxl-instagram"></i>
          </a>
        </div>
      </div> */}
    </>
  );
};

export default Home;
