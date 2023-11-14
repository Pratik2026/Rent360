"use client";

import { CarouselComponent } from "../components/carousel";
import { Chat, Phone } from "phosphor-react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Badge } from "keep-react";
import { useState } from "react";

function View() {
  const [Itemstatus, setItemStatus] = useState("Available");

  return (
    <div>
      <Navbar />
      <div className="body h-full bg-[#F2F4F5] mt-20">
        <div className="flex flex-col md:flex-row justify-around">
          <div className="left-section flex flex-col w-full md:w-2/3 my-16">
            <div className="img px-24 mx-16 bg-black border">
              <CarouselComponent />
            </div>
            <div className="description shadow-md border bg-white flex flex-col justify-between m-8 rounded-md">
              <div className="text-4xl text-bold text-gray-900 m-2">
                Description
              </div>
              <p className="text-gray-900 m-2 text-sm">
                Lorem ipsum dolor sit
                <br />
                <br /> amet consectetur adipisicing elit.
                <br />
                <br />
                Voluptates, quia! Distinctio
                <br />
                <br /> reprehenderit magni ratione at ducimus
                <br />
                <br />
                quidem iusto reiciendis vero!
              </p>
            </div>
          </div>
          <div className="right-section w-full md:w-1/3 flex flex-col my-16 gap-8 md:mt-0">
            <div className="pricecard border border-gray-100 h-48 flex flex-col justify-around p-4 mr-4 bg-white rounded-md">
              <div className="price font-bold text-8xl">Rs.1000 </div>
              <div className="w-16 flex gap-4">
                <Badge size="sm" colorType="light" color="gray">
                  Status
                </Badge>
                <Badge
                  size="sm"
                  colorType="light"
                  color={Itemstatus == "Available" ? "success" : "error"}
                >
                  {Itemstatus}
                </Badge>
              </div>

              <div className="bottom flex justify-between">
                <p className="address">Lorem ipsum dolor sit amet.</p>
                <span>
                  <Badge size="sm" colorType="light" color="gray">
                    26 Oct
                  </Badge>
                </span>
              </div>
            </div>
            <div className="ownerdetail h-48 border border-gray-100 flex flex-col justify-center items-center gap-4 mr-4 bg-white rounded-md">
              <p className="text-gray-900 font-bold py-2 mx-4 align-left">
                Seller Name
              </p>
              <button className=" text-gray-900 font-bold py-2 mx-4 w-3/4 outline outline-gray-900 flex justify-center items-center gap-2">
                <Chat size={32} color="#5AE4A8" weight="bold" />
                <p>CHAT WITH SELLER</p>
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
    </div>
  );
}

export default View;
