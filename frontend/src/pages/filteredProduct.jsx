import { DropdownComponent } from "../components/dropdown.jsx";
import { ProductCard } from "../components/productCard.jsx";
import Footer from "../components/footer.jsx";
import Navbar from "../components/navbar.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { filteredProductsRoute } from "../../utils/api_routes.jsx";

const FilteredProducts = () => {
    const [products, setProducts] = useState([]);
  const { category } = useParams();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(filteredProductsRoute, {category});
        console.log(response.data);
        if (
          response.data
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

  return (
    <>
      <Navbar />
      <div className="categories my-20 bg-slate-100 shadow-md mb-4 ">
        <DropdownComponent />
      </div>

      <div className="services-container flex justify-center items-center gap-16 flex-wrap">
        {products.length > 0 ? (
          products.map((product) => (
              <ProductCard
              key2={category}
              key={product.id}
              id={product.id}
              img={product.product_image_url}
              price={`Rs ${product.price}`}
              title={product.title}
            />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default FilteredProducts;
