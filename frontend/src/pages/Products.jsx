import { DropdownComponent } from "../components/dropdown.jsx";
import { CardComponent } from "../components/cardcomponent.jsx";

const Products = () => {
  return (
    <div>
      <DropdownComponent />
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
    </div>
  );
};

export default Products;
