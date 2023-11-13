// SellForm.js
import { useState } from "react";
import { UploadComponent } from "../components/upload";
import Footer from "../components/footer";

const SellForm = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", product);
  };

  return (
    <div>
      <form className="max-w-2xl mx-auto mt-8" onSubmit={handleSubmit}>
        <div className="text-center text-2xl font-semibold mb-8">
          POST YOUR PRODUCT
        </div>
        <div className="box border border-slate-200 p-4 rounded-lg">
          <div className="mb-4 ">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-custom_primary focus:border-2"
              id="title"
              type="text"
              name="title"
              value={product.title}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-custom_primary focus:border-2"
              id="description"
              name="description"
              value={product.description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-custom_primary focus:border-2"
              id="description"
              name="description"
              value={product.address}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-custom_primary focus:border-2"
              id="price"
              type="text"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Image
            </label>
            <UploadComponent />
          </div>
        </div>

        <div className="flex items-center justify-between mt-8">
          <button
            className="w-full bg-red-500 hover:bg-custom_primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            POST NOW
          </button>
        </div>
      </form>
      <div className="mt-48"><Footer /></div>
      
    </div>
  );
};

export default SellForm;
