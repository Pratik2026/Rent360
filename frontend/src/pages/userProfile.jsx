import { Button } from "keep-react";
import { EmptyComponent } from "../components/emptyresult.jsx";
import Footer from "../components/footer.jsx";
import Navbar from "../components/navbar.jsx";
import { ProfileCard } from "../components/profileCard.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "../components/userProductCard.jsx";
import { userProductRoute } from "../../utils/api_routes.jsx";

const UserProfile = () => {
  const [products, setProducts] = useState({});
  const userid = localStorage.getItem("userid");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(userProductRoute, { userid });
        console.log(response.data);
        if (response.data) {
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
    if (products.length > 0) {
      console.log(products);
    }
  }, [products]);
  return (
    <>
      <Navbar />
      <div className="mx-20 my-20 flex items-start gap-4">
        <ProfileCard />
        <div className="display_box flex flex-wrap gap-16 justify-center w-full mt-10">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key2={userid}
                key={product.id}
                id={product.id}
                img={product.product_image_url}
                price={`Rs ${product.price}`}
                title={product.title}
              />
            ))
          ) : (
            <div>
              <EmptyComponent
                title="OOPS! Looks like you haven't listed anything yet."
                content="Let go what you don't find useful anymore."
              />
              <center>
                <Button size="md" href="/sellform" color="info">
                  Start Selling
                </Button>
              </center>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
