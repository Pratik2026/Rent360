import { CarouselComponent } from "../components/carousel";
import Footer from "../components/footer";

function View() {
  return (
    <div className="body h-screen bg-[#F2F4F5]">
      <div className="flex justify-around  ">
        <div className="left-section flex flex-col w-2/3 my-16">
          <div className="img px-24 mx-16 bg-black border">
            <CarouselComponent />
          </div>
          <div className="description shadow-md border bg-white flex flex-col justify-between m-8 rounded-md">
            <div className="text-4xl text-bold text-gray-900 m-2">Description</div>
            <p className="text-gray-900 m-2 text-sm">Lorem ipsum dolor sit<br /><br /> amet consectetur adipisicing elit.<br /><br />
            Voluptates, quia! Distinctio<br /><br /> reprehenderit magni ratione at ducimus<br /><br />
            quidem iusto reiciendis vero!</p>
          </div>
        </div>
        <div className="right-section w-1/3 flex flex-col my-16 gap-8">
          <div className="pricecard border border-gray-100 h-48 flex flex-col justify-around p-4 mr-4 bg-white rounded-md">
            <div className="price font-bold text-8xl">Rs.1000 </div>
            <div className="bottom flex justify-between">
              <p className="address">Lorem ipsum dolor sit amet.</p>
              <span>26 Oct</span>
            </div>
          </div>
          <div className="ownerdetail h-48 border border-gray-100 flex flex-col justify-center items-center gap-4 mr-4 bg-white rounded-md">
            <p className="text-gray-900 font-bold py-2 mx-4 align-left">
              Seller Name
            </p>
            <button className=" text-gray-900 font-bold py-2 mx-4 w-3/4 outline outline-gray-900">
              CHAT WITH SELLER
            </button>
            <p className="text-gray-900 font-bold py-2 mx-4">
              Mobile No. 123456789
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default View;
