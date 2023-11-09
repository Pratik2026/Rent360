import Navbar from "../components/navbar";
import beats from "../assets/beats.png";

function Rent() {
  return (
    <>
      <Navbar />

      {/* <header>
        <div className="bx bx-menu" id="menu-icon" />

        <div className="header-btn">
          <a href="#" className="cart-btn">
            <ion-icon name="cart-outline" />
          </a>
          <a href="#" className="cart-btn">
            <ion-icon name="person-circle-sharp" />
          </a>
        </div>
      </header> */}
      {/* Container */}
      <main className=" lg:max-w-[1200px] lg:flex lg:flex-row lg:mx-auto lg:my-0 lg:p-[15px] flex-col mt-[60px]">
        {/* Left Column */}
        <div className="left-column lg:w-[65%] w-full">
          <img
            data-image="red"
            className="lg:w-full opacity-1 transition-all duration-[0.3s] ease-[ease] lg:left-0 lg:top-0 w-[300px] top-[-65px] left-[initial] right-0"
            src={beats}
            alt=""
          />
        </div>
        {/* Right Column */}
        <div className="right-column lg:w-[35%] lg:mt-[60px] w-full">
          {/* Product Description */}
          <div className="product-description mb-5 border-b-[#E1E8EE] border-b border-solid">
            <span className="text-xs text-[color:#474fa0] tracking-[1px] uppercase no-underline;">
              Headphones For Rent
            </span>
            <h1 className="font-light text-[52px] text-[color:#444] tracking-[-2px]">
              Beats EP
            </h1>
            <p className="">
              The preferred choice of a vast range of acclaimed DJs. Punchy,
              bass-focused sound and high isolation. Sturdy headband and on-ear
              cushions suitable for live performance
            </p>
          </div>
          {/* Product Configuration */}
          <div className="product-configuration">
            {/* Cable Configuration */}
            <div className="cable-config mb-5 border-b-[#E1E8EE] border-b border-solid;">
              <span>Specifications</span>
              <div className="cable-choose mb-5 ">
                {["Good headphone", "best", "Long-coiled"].map((name) => (
                  <button className="text-sm text-[#5E6977] bg-white cursor-pointer transition-all duration-[0.5s] px-5 py-[13px] rounded-md border-2 border-solid border-[#E1E8EE] hover:border-2 hover:border-solid hover:border-[#86939E]">
                    {name}
                  </button>
                ))}
              </div>
              <a href="#">How to use/configure headphones</a>
            </div>
          </div>
          {/* Product Pricing */}
          <div className="product-price flex items-center">
            <span className="text-[26px] font-light text-[#43474D] mr-5">
              148$
            </span>
            <a
              href="#"
              className="cart-btn inline-flex items-center bg-[color:#fe5b3d] text-base text-white no-underline transition-all duration-[0.5s] mr-1.5 px-[30px] py-3 rounded-md hover:bg-[color:var(--main-color)] text-[25px] "
            >
              Add to cart <ion-icon name="cart-outline" />
            </a>
          </div>
        </div>
      </main>
      <div className="copyright flex justify-between items-end p-5">
        <p>© Rent360 All Rights Reserved</p>
        <div className="social text-[#444] text-[21px] p-2.5">
          <a href="#">
            <i className="bx bxl-facebook" />
          </a>
          <a href="#">
            <i className="bx bxl-twitter" />
          </a>
          <a href="#">
            <i className="bx bxl-instagram" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Rent;
