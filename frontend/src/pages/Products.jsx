import { DropdownComponent } from "../components/dropdown.jsx";
import { ProductCard } from "../components/productCard.jsx";
import { PaginationComponent } from "../components/pagination.jsx";
import Footer from "../components/footer.jsx";
import Navbar from "../components/navbar.jsx";

const Products = () => {
  return (
    <div>
      <Navbar />
      <div className="categories my-20 bg-slate-100 shadow-md mb-4 ">
        <DropdownComponent />
      </div>

      <div className="services-container flex justify-center items-center gap-16 flex-wrap">
        <ProductCard
          img="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format"
          price="Rs 1000"
          title="Nike Shoes"
        />
        <ProductCard
          img="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format"
          price="Rs 1000"
          title="Nike Shoes"
        />{" "}
        <ProductCard
          img="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format"
          price="Rs 1000"
          title="Nike Shoes"
        />{" "}
        <ProductCard
          img="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format"
          price="Rs 1000"
          title="Nike Shoes"
        />{" "}
        <ProductCard
          img="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format"
          price="Rs 1000"
          title="Nike Shoes"
        />{" "}
        <ProductCard
          img="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format"
          price="Rs 1000"
          title="Nike Shoes"
        />{" "}
        <ProductCard
          img="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format"
          price="Rs 1000"
          title="Nike Shoes"
        />
      </div>
      <div className="flex justify-center my-10">
        <PaginationComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
