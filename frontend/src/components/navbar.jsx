const Navbar = () => {
  return (
    <div>
      <div className="navbar flex justify-between items-center h-20 bg-[#ecebedff]">
        <div className="text-4xl font-bold text-textcolor select-none ml-20">
          Rent360
        </div>
        <ul className="flex justify-center items-center gap-12 mr-24 font-medium text-gray-900 text-md">
          <li>
            <a href="/" className="">
              Home
            </a>
          </li>
          <li>
            <a href="/rent">Rent</a>
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
        <span className="mr-20 px-4 py-1 header-btn bg-red-500 rounded-md transition-colors duration-500 hover:bg-primary">
          <a href="#" className=" text-white text-xl ">
            Login
          </a>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
