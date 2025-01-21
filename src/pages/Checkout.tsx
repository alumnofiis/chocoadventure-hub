import Navigation from "@/components/Navigation";
import { CreditCard, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Gracias por tu compra!",
      description: "Tu chocolate está en camino.",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-cream/50">
      <Navigation />
      <div className="pt-24 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-playfair text-chocolate-dark text-center mb-12">
          Finalizar Compra
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-playfair text-chocolate-dark mb-6">
                <Truck className="inline-block w-6 h-6 mr-2" />
                Dirección de envío
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-chocolate-dark mb-2">Nombre</label>
                    <Input id="nombre" required />
                  </div>
                  <div>
                    <label htmlFor="apellido" className="block text-chocolate-dark mb-2">Apellido</label>
                    <Input id="apellido" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="direccion" className="block text-chocolate-dark mb-2">Dirección</label>
                  <Input id="direccion" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ciudad" className="block text-chocolate-dark mb-2">Ciudad</label>
                    <Input id="ciudad" required />
                  </div>
                  <div>
                    <label htmlFor="codigoPostal" className="block text-chocolate-dark mb-2">Código Postal</label>
                    <Input id="codigoPostal" required />
                  </div>
                </div>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-playfair text-chocolate-dark mb-6">
                <CreditCard className="inline-block w-6 h-6 mr-2" />
                Información de pago
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="tarjeta" className="block text-chocolate-dark mb-2">Número de tarjeta</label>
                  <Input id="tarjeta" placeholder="1234 5678 9012 3456" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="vencimiento" className="block text-chocolate-dark mb-2">Fecha de vencimiento</label>
                    <Input id="vencimiento" placeholder="MM/AA" required />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-chocolate-dark mb-2">CVV</label>
                    <Input id="cvv" placeholder="123" required />
                  </div>
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-chocolate-dark hover:bg-chocolate-medium text-cream mt-6"
                >
                  Confirmar pedido
                </Button>
              </form>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 h-fit">
            <h2 className="text-2xl font-playfair text-chocolate-dark mb-6">Resumen del pedido</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-chocolate-medium">
                <span>Subtotal</span>
                <span>S/ 56.97</span>
              </div>
              <div className="flex justify-between text-chocolate-medium">
                <span>Envío</span>
                <span>Gratis</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-chocolate-dark font-semibold">
                  <span>Total</span>
                  <span>S/ 56.97</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;