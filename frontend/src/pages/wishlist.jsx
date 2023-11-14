import { useEffect, useState } from "react";
import { EmptyComponent } from "../components/emptyresult.jsx";
import Footer from "../components/footer.jsx";
import Navbar from "../components/navbar.jsx";
import { ProductCard } from "../components/productCard.jsx";

export const Wishlist = () => {
  const [wishlistitems, setWishlistItems] = useState([1]);

  useEffect(() => {
    setWishlistItems([1,2]);
  }, []);

  return (
    <div className="h-screen flex flex-col justify-between">
      <Navbar />
      {wishlistitems.length === 0 ? (
        <EmptyComponent
        title="You haven't liked anything yet."
        content="Express your love for the products you like."
      />
      ) : (
        <div className="flex justify-start h-full mt-32 mx-8 gap-4 mb-10">
          <ProductCard
            img="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format"
            price="Rs 1000"
            title="Nike Shoes"
          />
        </div>
      )}

      <Footer />
    </div>
  );
};
