import Navigation from "@/components/Navigation";
import ProductGrid from "@/components/ProductGrid";

const Productos = () => {
  return (
    <div className="min-h-screen bg-cream/50">
      <Navigation />
      <div className="pt-24">
        <ProductGrid />
      </div>
    </div>
  );
};

export default Productos;