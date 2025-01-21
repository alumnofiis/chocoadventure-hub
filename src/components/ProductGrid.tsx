import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Chocolate Oscuro 70%",
    description: "Chocolate vegano con 100% cacao peruano, sin azúcar añadida",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  },
  {
    id: 2,
    name: "Bombones Artesanales",
    description: "Selección de bombones veganos con rellenos naturales",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  },
  {
    id: 3,
    name: "Caja Regalo Premium",
    description: "Surtido especial de nuestros mejores chocolates",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  },
  {
    id: 4,
    name: "Chocolate con Almendras",
    description: "Chocolate oscuro con almendras tostadas",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  }
];

const ProductGrid = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-playfair text-chocolate-dark text-center mb-8">
        Nuestros Productos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="bg-cream hover:shadow-lg transition-shadow">
            <CardHeader>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardTitle className="text-xl font-playfair text-chocolate-dark">
                {product.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-chocolate-medium text-sm">{product.description}</p>
              <p className="text-gold font-semibold mt-2">S/ {product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-chocolate-dark hover:bg-chocolate-medium text-cream flex items-center justify-center gap-2"
                onClick={() => console.log(`Añadir al carrito: ${product.name}`)}
              >
                <ShoppingCart className="w-4 h-4" />
                Añadir al Carrito
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;