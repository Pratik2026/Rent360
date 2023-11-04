const Navbar = () => {
  return (
    <div>
      <div className="navbar flex justify-between items-center h-20 bg-[#ecebedff]">
        <div className="text-4xl font-semibold text-gray-700 select-none ml-20">
          Rent360
        </div>
        <div className="" id="menu-icon"></div>
        <ul className="flex justify-center items-center gap-12 mr-28 font-medium">
          <li className="">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#rent">Rent</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#reviews">Reviews</a>
          </li>
        </ul>
        <div className="header-btn">
          <a
            href="#"
            className="mr-20 py-2 px-5 text-white bg-red-500 rounded-md transition-colors duration-500 hover:bg-var(--main-color)"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
