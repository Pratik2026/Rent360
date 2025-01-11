import React, { useEffect } from "react";
import avatar from "../assets/avatar.png";
import logo from "../assets/logo.jpeg";
import { AvatarComponent } from "./Avatar.jsx";
import { ButtonComponent } from "./sellbutton.jsx";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [loginstatus, setLoginStatus] = React.useState(false);
  const [name, setName] = React.useState("");
  const [userid, setUserid] = React.useState("");
  // const [message, setMessage] = React.useState("");

  // const navigate = useNavigate();
  // let a = 

  // const handleKeyDown = (event) => {
  //   console.log("Key pressed:", event.key);
  //   if (event.key === "Enter") {
  //     console.log("Inside Enter condition");
  //     console.log("pressed");
  //     const enteredValue = event.target.value;
  //     navigate(`/search/${enteredValue}`);
  //     window.location.reload();
  //     // a = 
  //   }
  // };

  useEffect(() => {
    // const storedLoginStatus = localStorage.getItem("loginstatus");
    const storedName = localStorage.getItem("name");
    const storedUserid = localStorage.getItem("userid");

    if (storedName) {
      setLoginStatus(true);
      setName(storedName);
      setUserid(storedUserid);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("loginstatus", loginstatus.toString());
    localStorage.setItem("name", name);
    localStorage.setItem("userid", userid);
  }, [loginstatus, name, userid]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL)
      .then((res) => {
        if (res.data.status === true) {
          console.log(res.data);
          setName(res.data.name);
          setLoginStatus(true);
          setUserid(res.data.userid);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoginStatus(false);
      });
  }, []);

  return (
    <>
      <div className="navbar flex justify-between items-center h-20 bg-[#ffffff] shadow-md fixed top-0 z-10 w-full">
        <a href="/">
          <img src={logo} alt="" className="md:h-16 h-12 my-2 ml-4 rounded-md" />
        </a>

        {loginstatus ? (
          <div className="flex gap-8 items-center">
            <ButtonComponent />
            <div className="mr-8 hover:cursor-pointer ">
              <AvatarComponent avatar={avatar} />
            </div>
          </div>
        ) : (
          <span className="h-[2.8rem] px-4 py-1 md:mr-4 header-btn bg-blue-300 rounded-md transition-colors duration-500 hover:bg-blue-500">
            <a href="/login" className=" text-white text-xl ">
              Login
            </a>
          </span>
        )}
      </div>
    </>
  );
};

export default Navbar;
