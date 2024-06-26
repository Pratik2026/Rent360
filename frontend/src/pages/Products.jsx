import { DropdownComponent } from "../components/dropdown.jsx";
import { ProductCard } from "../components/productCard.jsx";
import Footer from "../components/footer.jsx";
import Navbar from "../components/navbar.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { productsRoute } from "../../utils/api_routes.jsx";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(productsRoute, {});

        if (
          response.data &&
          Array.isArray(response.data) &&
          response.data.length > 0
        ) {
          setProducts(response.data);
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
    if (products.length > 0) {
      console.log(products[0].title);
    }
  }, [products]);

  return (
    <>
      <Navbar />
      <div className="categories my-20 pl-10 bg-slate-100 shadow-md w-full ">
        <DropdownComponent />
      </div>

      <div className="services-container flex flex-col md:flex-row justify-center items-center gap-16 flex-wrap w-full">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              img={product.product_image_url}
              price={`Rs ${product.price}`}
              title={product.title}
            />
          ))
        ) : (
          <p className="text-xl mb-4">No products found</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Products;
