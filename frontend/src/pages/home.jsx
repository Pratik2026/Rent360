/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/navbar";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import { CardComponent } from "../components/cardcomponent.jsx";
import { CarouselComponent } from "../components/slider.jsx";

const Home = () => {
  return (
    <>
      <Navbar />

      <section
        className="text-image flex justify-between items-center"
        id="home"
      >
        <div className="flex flex-col justify-center ml-20 h-[calc(100vh-10vh)] gap-32 w-1/3">
          <div className="text flex flex-col gap-4">
            <div className="text-6xl font-bold tracking-wider">
              <span className="text-custom_primary">Looking </span> to <br />
              rent anthing?
            </div>
            <p className="text-md text-textcolor font-medium">
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
                className="py-1 px-4 text-white text-lg bg-red-500 rounded-md transition-colors duration-500 hover:bg-custom_primary"
                value="Try It Out!"
              />
            </form>
          </div>
        </div>
        <div className="w-2/3 mr-20">
          <CarouselComponent />
        </div>
      </section>

      <section
        className="rent flex flex-col justify-center items-center gap-10"
        id="rent"
      >
        <div className="heading flex flex-col justify-center items-center gap-4">
          <span className="text-lg font-normal text-textcolor">
            How It Work's
          </span>
          <div className="text-3xl font-bold">Rent with 3 Easy Steps</div>
        </div>
        <div className="rent-container flex justify-center items-center w-screen gap-10">
          <div className="box flex flex-col justify-center items-center gap-4">
            <img src={c1} alt="" />
            <div className="font-medium text-xl">Choose A Location</div>
            <p className="text-center mx-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut iste
              delectus sequi provident, inventore animi?
            </p>
          </div>
          <div className="box flex flex-col justify-center items-center gap-4">
            <img src={c1} alt="" />
            <div className="font-medium text-xl">Pick-Up Date</div>
            <p className="text-center mx-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut iste
              delectus sequi provident, inventore animi?
            </p>
          </div>
          <div className="box flex flex-col justify-center items-center gap-4">
            <img src={c1} alt="" />
            <div className="font-medium text-xl">Rent An Item</div>
            <p className="text-center mx-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut iste
              delectus sequi provident, inventore animi?
            </p>
          </div>
        </div>
      </section>

      <section
        className="services flex flex-col justify-center items-center gap-10 mt-10"
        id="services"
      >
        <div className="heading flex flex-col justify-center items-center gap-4">
          <span className="text-lg font-medium">Best Services</span>
          <div className="text-3xl font-bold text-center">
            Explore Our Top Deals <br /> From Our Top Rated Users
          </div>
        </div>
        <div className="services-container flex justify-center items-center gap-16 flex-wrap">
        <div className="services-container flex justify-center items-center gap-16 flex-wrap">
        <CardComponent
          img="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format"
          price="Rs 1000"
          title="Nike Shoes"
        />
        <CardComponent
          img="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format"
          price="Rs 1000"
          title="Nike Shoes"
        />{" "}
        <CardComponent
          img="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format"
          price="Rs 1000"
          title="Nike Shoes"
        />{" "}
        <CardComponent
          img="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format"
          price="Rs 1000"
          title="Nike Shoes"
        />{" "}
        <CardComponent
          img="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format"
          price="Rs 1000"
          title="Nike Shoes"
        />{" "}
        <CardComponent
          img="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format"
          price="Rs 1000"
          title="Nike Shoes"
        />{" "}
        <CardComponent
          img="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format"
          price="Rs 1000"
          title="Nike Shoes"
        />
      </div>
        </div>
      </section>

      <section
        className="about flex flex-col justify-center items-center gap-10 mt-10"
        id="about"
      >
        <div className="heading flex flex-col justify-center items-center gap-2">
          <span className="text-lg font-medium">About Us</span>
          <div className="text-3xl font-bold text-center">
            Best Customer Experience
          </div>
        </div>
        <div className="about-container flex justify-end items-center">
          <div className="about-img  w-1/2">
            <img src="#" alt="" />
          </div>
          <div className="about-text flex flex-col gap-4 w-1/2">
            <span className="text-custom_primary font-medium">ABOUT US</span>
            <p className="text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
              sint incidunt. Nihil assumenda hic laborum libero quasi maxime
              tenetur, quidem amet eos et facere voluptas aliquid quisquam vero.
              Quaerat consequatur soluta consequuntur tempora maxime!
            </p>
            <p className="text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ad
              ratione iste quibusdam praesentium ipsa vel tenetur autem?
            </p>
            <a
              href="#"
              className="btn w-fit font-medium text-white px-4 py-1 header-btn bg-red-500 rounded-md transition-colors duration-500 hover:bg-custom_primary"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section
        className="reviews flex flex-col justify-center items-center gap-10 mt-10"
        id="reviews"
      >
        <div className="heading flex flex-col justify-center items-center gap-4">
          <span className="text-lg font-medium">Reviews</span>
          <div className="text-3xl font-bold text-center">
            What Our Customers Say
          </div>
        </div>
        <div className="reviews-container flex justify-center items-center flex-wrap gap-16">
          <div className="box p-10 rounded-lg shadow-md w-96">
            <div className="w-32 h-32">
              <img
                src={c1}
                alt=""
                className="rev-img w-full h-full rounded-full object-cover object-center border-2 border-secondary"
              />
            </div>
            <div className="text-lg font-semibold my-2">Customer's Name</div>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <p className="italic">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              expedita laborum, animi pariatur esse obcaecati delectus quam
              commodi!
            </p>
          </div>

          <div className="box p-10 rounded-lg shadow-md w-96">
            <div className="w-32 h-32">
              <img
                src={c2}
                alt=""
                className="rev-img w-full h-full rounded-full object-cover object-center border-2 border-secondary"
              />
            </div>
            <div className="text-lg font-semibold my-2">Customer's Name</div>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <p className="italic">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit at
              nemo voluptatem. Quae ea earum veritatis dolores quos.
            </p>
          </div>

          <div className="box p-10 rounded-lg shadow-md w-96">
            <div className="w-32 h-32">
              <img
                src={c3}
                alt=""
                className="rev-img w-full h-full rounded-full object-cover object-center border-2 border-secondary"
              />
            </div>
            <div className="text-lg font-semibold my-2">Customer's Name</div>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <p className="italic">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              facere quibusdam incidunt ea? Doloribus illo ducimus doloremque
              beatae.
            </p>
          </div>
        </div>
      </section>

      <section className="newsletter flex flex-col justify-center items-center bg-[linear-gradient(#474fa0,#7d82bb)] h-48">
        <div className="text-3xl text-white font-medium">
          Subscribe To Our Newsletter
        </div>
        <div className="box mt-4 bg-white rounded-md p-2 w-350 flex justify-between">
          <input
            type="text"
            placeholder="Enter Your Email..."
            className="border-none outline-none"
          />
          <a
            href="#"
            className="btn w-fit font-medium text-white px-4 py-2 header-btn bg-red-500 rounded-md transition-colors duration-500 hover:bg-custom_primary"
          >
            Subscribe
          </a>
        </div>
        <br />
      </section>

      <div className="copyright p-5 flex justify-between items-center">
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
      </div>
    </>
  );
};

export default Home;
