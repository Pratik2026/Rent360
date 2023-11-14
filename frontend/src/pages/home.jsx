/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/navbar";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import about from "../assets/about.jpg";
import { CarouselComponent } from "../components/carousel.jsx";
import Footer from "../components/footer.jsx";
import { Calendar, MapPin, Package } from "phosphor-react";
import { Button } from "keep-react";
import { RatingComponent } from "./rating.jsx";
import Topdeals from "../components/topdeals.jsx";

const Home = () => {
  return (
    <>
      <Navbar />

      <section
        className="text-image flex justify-between mt-20"
        id="home"
      >
        <div className="flex flex-col xl:ml-20 md:ml-10 gap-16 w-1/3 my-24">
          <div className="text flex flex-col gap-4">
            <div className=" xl:text-[52px] lg:text-[30px] sm:text-[20px] font-bold tracking-wider">
              <span className="text-custom_primary ">Looking </span> to <br />
              rent anthing?
            </div>
            <p className="text-md lg:text-sm text-textcolor font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Magni maiores, ducimus quibusdam temporibus aliquid
            </p>
          </div>
          <Button type="primary" size="lg" color="success" href="/products" >Try it Out!</Button>
        </div>
        <div className="w-2/3 h-full my-4">
          <CarouselComponent />
        </div>
      </section>

      <section
        className="rent flex flex-col justify-center items-center gap-10 mt-10 mb-20"
        id="rent"
      >
        <div className="heading flex flex-col justify-center items-center gap-4">
          <span className="text-lg font-semibold text-custom_primary">
            How It Work's
          </span>
          <div className="text-3xl font-bold">Rent with 3 Easy Steps</div>
        </div>
        <div className="rent-container flex justify-center items-center w-screen gap-10">
          <div className="box flex flex-col justify-center items-center gap-4 shadow-lg w-1/3 mx-8 py-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <MapPin size={80} color="#18B5B0" />
            <div className="font-medium text-xl">Choose A Location</div>
            <p className="text-center mx-5 w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut iste
              delectus sequi provident, inventore animi?
            </p>
          </div>
          <div className="box flex flex-col justify-center items-center gap-4 shadow-lg w-1/3 mx-8 py-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Calendar size={80} color="#18B5B0" />
            <div className="font-medium text-xl">Pick-Up Date</div>
            <p className="text-center mx-5 w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut iste
              delectus sequi provident, inventore animi?
            </p>
          </div>
          <div className="box flex flex-col justify-center items-center gap-4 shadow-lg w-1/3 mx-8 py-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Package size={80} color="#18B5B0" />
            <div className="font-medium text-xl">Rent An Item</div>
            <p className="text-center mx-5 w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut iste
              delectus sequi provident, inventore animi?
            </p>
          </div>
        </div>
      </section>

      <Topdeals />

      <section
        className="about flex flex-col justify-center items-center gap-10 mt-10 bg-[#E8EAF6] py-5"
        id="about"
      >
        <div className="heading flex flex-col justify-center items-center gap-2">
          <span className="text-lg font-medium">About Us</span>
          <div className="text-3xl font-bold text-center">
            Best Customer Experience
          </div>
        </div>
        <div className="about-container flex justify-end items-center">
          <div className="about-img  w-1/3 flex justify-center">
            <img src={about} alt="" className="h-72"/>
          </div>
          <div className="about-text flex flex-col gap-4 w-2/3">
            <span className="text-custom_primary font-medium">ABOUT US</span>
            <p className="text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
              sint incidunt. Nihil assumenda hic laborum libero quasi maxime
              tenetur, quidem amet eos et facere voluptas aliquid quisquam vero.
              Quaerat consequatur soluta consequuntur tempora maxime!
            </p>
            <p className="text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ad
              ratione iste quibusdam praesentium ipsa vel tenetur autem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo veniam perferendis illum eum dolor consequatur, doloremque sapiente rerum ea esse.
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
        className="reviews flex flex-col justify-center items-center gap-10 my-10 "
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
            <div className="stars py-2">
              <RatingComponent />
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
            <div className="stars py-2">
              <RatingComponent />
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
            <div className="stars py-2">
              <RatingComponent />
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

      <Footer />
    </>
  );
};

export default Home;
