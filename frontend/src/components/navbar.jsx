import React from "react";
import c1 from "../assets/c1.png";
import logo from "../assets/logo.jpeg";
import { AvatarComponent } from "./Avatar.jsx";
import { SearchBarComponent } from "./search.jsx";
import { ButtonComponent } from "./sellbutton.jsx";
import { Location } from "./location.jsx";

const Navbar = () => {
  const [loginstatus, setLoginStatus] = React.useState(true);

  return (
    <div>
      <div className="navbar flex justify-around items-center h-20 bg-[#ffffff] shadow-md fixed top-0 z-10 w-screen">
        <img src={logo} alt="" className="h-16 my-2 rounded-md"/>

        <div><Location /></div>
        <div className="search-bar w-1/2">
          <SearchBarComponent />
        </div>

        {loginstatus ? (
          <div className="flex gap-8">
            <ButtonComponent />
            <div className="mr-8 hover:cursor-pointer">
              <AvatarComponent avatar={c1} />
            </div>
          </div>
        ) : (
          <span className="mr-20 px-4 py-1 header-btn bg-red-500 rounded-md transition-colors duration-500 hover:bg-custom_primary">
            <a href="#" className=" text-white text-xl ">
              Login
            </a>
          </span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
