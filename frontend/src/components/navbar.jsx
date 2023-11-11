import React from "react";
import c1 from "../assets/c1.png";
import { AvatarComponent } from "./Avatar.jsx";
import { SearchBarComponent } from "./search.jsx";
import { ButtonComponent } from "./sellbutton.jsx";

const Navbar = () => {
  const [loginstatus, setLoginStatus] = React.useState(true);

  return (
    <div>
      <div className="navbar flex justify-between items-center h-20 bg-[#ecebedff]">
        <div className="text-4xl font-bold text-textcolor select-none ml-20">
          Rent360
        </div>

        <div className="search-bar w-1/2">
          <SearchBarComponent />
        </div>

        {loginstatus ? (
          <div className="flex gap-8">
            <ButtonComponent />
            <div className="mr-6">
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
