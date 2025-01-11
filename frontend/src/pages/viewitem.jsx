"use client";
import { Chat, Phone, PlusCircle } from "phosphor-react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Badge } from "keep-react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { addWishlistRoute, checkWishlistRoute, productsRoute } from "../../utils/api_routes";
import { Toaster, toast } from "react-hot-toast";


function View() {
  const [wishStatus, setWishStatus] = useState(false);
  const [sellerid, setSellerid] = useState('')

  const { id } = useParams();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(productsRoute, {});
        console.log(response.data);

        if (response.data) {
          setProducts(response.data[id - 1]);
        } else {
          console.log("No products found in the response.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Now you can safely use products here
    if (products) {
      console.log(products);
      setSellerid(products.sellerid);
    }
  }, [products]);

  const userid = localStorage.getItem("userid");

  const handleWish = async () => {
    const response = await axios.post(addWishlistRoute, {
      userid,
      id,
    });
    if (response.data.status === true) {
      
      wishStatus ? toast.success("Removed from wishlist") : toast.success("Added to wishlist");
      setWishStatus(!wishStatus);
    }
    else {
      setWishStatus(false);
    }
  };

  useEffect(() => {
    const wishChecker = async () => {
      const response = await axios.post(checkWishlistRoute, {
        userid,
        id,
      });
      if (response.data.status === true) {
        setWishStatus(true);
      }
    };
    wishChecker();
  }, [userid, id]);
  const navigate = useNavigate();
  const handleChat = () => {
    if(sellerid)
      navigate(`/chat/${sellerid}`)
    else
      navigate('/chat/ramesh123')
  }

  return (
    <div>
      <Navbar />
      <div className="body h-full bg-[#F2F4F5] mt-20">
        <div className="flex flex-col lg:flex-row justify-around h-400">
          <div className="left-section flex flex-col w-full lg:w-2/3 my-8 lg:my-16">
            <div className="img px-4 md:px-24 mx-4 md:mx-16 bg-black border ax-h-[30rem] py-4 md:py-12">
              {products && <img className="object-cover" src={products.product_image_url} />}
            </div>
            <div className="description shadow-md border bg-white flex flex-col justify-between my-8 mx-4 rounded-md max-w-[55rem] ">
              <div className="text-4xl text-bold text-gray-900 m-2">
                Description
              </div>

              <div className="text-gray-900 m-2 text-sm">
                {products && <p>{products.description}</p>}
              </div>
            </div>
          </div>
          <div className="right-section w-full lg:w-1/3 flex flex-col my-8 lg:my-16 gap-8">
            <div className="pricecard border border-gray-100 h-48 flex flex-col justify-around p-4 mx-4 lg:mx-0 lg:mr-4 bg-white rounded-md">
              <div className="price font-bold text-8xl">
                {products && <p>₹{products.price}</p>}
              </div>
              <div className="w-16 flex gap-4">
                <Badge size="sm" colorType="light" color="gray">
                  Status
                </Badge>
                <Badge
                  size="sm"
                  colorType="light"
                  // color={Itemstatus == "Available" ? "success" : "error"}
                  color="success"
                >
                  {/* {Itemstatus} */}Available
                </Badge>
              </div>

              <div className="bottom flex justify-between">
                <div className="address">
                  {products && (
                    <p className="text-xl font-medium">{products.title}</p>
                  )}
                </div>
                <span>
                  <Badge size="sm" colorType="light" color="gray">
                    26 Oct
                  </Badge>
                </span>
              </div>
            </div>
            <div className="ownerdetail h-60 border border-gray-100 flex flex-col justify-center items-center gap-4 mx-4 lg:mx-0 lg:mr-4 bg-white rounded-md mt-4">
              <div className="text-gray-900 font-bold py-2 mx-4 align-left">
                {products && <p>{products.userid}</p>}
              </div>
              <button onClick={handleChat} className=" text-gray-900 font-bold py-2 mx-4 w-3/4 outline outline-custom_primary flex justify-center items-center gap-2 rounded-xl">
                <Chat size={32} color="#5AE4A8" weight="bold" />
                <p>CHAT WITH SELLER</p>
              </button>
              <button
                className=" text-gray-900 font-bold py-2 mx-4 w-3/4 outline outline-custom_primary flex justify-center items-center gap-2 rounded-xl"
                onClick={handleWish}
              >
                <PlusCircle size={32} color="#5AE4A8" weight="bold" />
                <p>{wishStatus ? "Added to Wishlist" : "Add to Wishlist" }</p>
              </button>
              <div className="text-gray-900 font-bold py-2 mx-4 flex justify-center items-center gap-2">
                <Phone size={32} weight="bold" />
                <p>Mobile No. 123456789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default View;
