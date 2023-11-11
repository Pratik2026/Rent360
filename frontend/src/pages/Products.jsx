import { DropdownComponent } from "../components/dropdown.jsx";
import { CardComponent } from "../components/cardcomponent.jsx";
import { PaginationComponent } from "../components/pagination.jsx";
import Footer from "../components/footer.jsx";

const Products = () => {
  return (
    <div>
      <div className="categories py-2 bg-slate-100 shadow-md mb-4">
        <DropdownComponent />
      </div>

      <div className="services-container flex justify-center items-center gap-16 flex-wrap">
        <CardComponent
          img="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format"
          price="Rs 1000"
          title="Nike Shoes"
        />
        <CardComponent
          img="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format"
          price="Rs 1000"
          title="Nike Shoes"
        />{" "}
        <CardComponent
          img="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format"
          price="Rs 1000"
          title="Nike Shoes"
        />{" "}
        <CardComponent
          img="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format"
          price="Rs 1000"
          title="Nike Shoes"
        />{" "}
        <CardComponent
          img="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format"
          price="Rs 1000"
          title="Nike Shoes"
        />{" "}
        <CardComponent
          img="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format"
          price="Rs 1000"
          title="Nike Shoes"
        />{" "}
        <CardComponent
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
