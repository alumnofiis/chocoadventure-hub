import Navigation from "@/components/Navigation";
import { ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const productosCarrito = [
  {
    id: 1,
    nombre: "Chocolate Oscuro 70%",
    precio: 15.99,
    cantidad: 2,
    imagen: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  },
  {
    id: 2,
    nombre: "Bombones Artesanales",
    precio: 24.99,
    cantidad: 1,
    imagen: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  }
];

const Carrito = () => {
  const navigate = useNavigate();
  const subtotal = productosCarrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  const envio = subtotal > 50 ? 0 : 10;
  const total = subtotal + envio;

  return (
    <div className="min-h-screen bg-cream/50">
      <Navigation />
      <div className="pt-24 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-playfair text-chocolate-dark text-center mb-12">
          Tu Carrito
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-6">
            {productosCarrito.map((producto) => (
              <div key={producto.id} className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4">
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-grow">
                  <h3 className="text-xl font-playfair text-chocolate-dark">{producto.nombre}</h3>
                  <p className="text-chocolate-medium">Cantidad: {producto.cantidad}</p>
                  <p className="text-gold font-semibold">S/ {producto.precio.toFixed(2)}</p>
                </div>
                <Button variant="ghost" className="text-chocolate-medium hover:text-chocolate-dark">
                  <Trash2 className="w-5 h-5" />
                </Button>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 h-fit">
            <h2 className="text-2xl font-playfair text-chocolate-dark mb-6">Resumen de compra</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-chocolate-medium">
                <span>Subtotal</span>
                <span>S/ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-chocolate-medium">
                <span>Envío</span>
                <span>{envio === 0 ? "Gratis" : `S/ ${envio.toFixed(2)}`}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-chocolate-dark font-semibold">
                  <span>Total</span>
                  <span>S/ {total.toFixed(2)}</span>
                </div>
              </div>
              <Button 
                className="w-full bg-chocolate-dark hover:bg-chocolate-medium text-cream"
                onClick={() => navigate("/checkout")}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Proceder al pago
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;