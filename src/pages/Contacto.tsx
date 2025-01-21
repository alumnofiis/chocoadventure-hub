import Navigation from "@/components/Navigation";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contacto = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
  };

  return (
    <div className="min-h-screen bg-cream/50">
      <Navigation />
      <div className="pt-24 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-playfair text-chocolate-dark text-center mb-12">
          Contáctanos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-chocolate-dark mb-2">Nombre</label>
                <Input id="nombre" placeholder="Tu nombre" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-chocolate-dark mb-2">Correo electrónico</label>
                <Input id="email" type="email" placeholder="tu@email.com" required />
              </div>
              <div>
                <label htmlFor="asunto" className="block text-chocolate-dark mb-2">Asunto</label>
                <Input id="asunto" placeholder="Asunto del mensaje" required />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-chocolate-dark mb-2">Mensaje</label>
                <Textarea id="mensaje" placeholder="Tu mensaje" className="min-h-[150px]" required />
              </div>
              <Button type="submit" className="w-full bg-chocolate-dark hover:bg-chocolate-medium text-cream">
                Enviar mensaje
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-playfair text-chocolate-dark mb-6">Información de contacto</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-chocolate-medium mr-3" />
                  <span className="text-chocolate-medium">contacto@chocodableperu.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-chocolate-medium mr-3" />
                  <span className="text-chocolate-medium">+51 123 456 789</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-chocolate-medium mr-3" />
                  <span className="text-chocolate-medium">Lima, Perú</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-playfair text-chocolate-dark mb-6">Síguenos</h2>
              <div className="flex space-x-4">
                <a href="#" className="text-chocolate-medium hover:text-chocolate-dark transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-chocolate-medium hover:text-chocolate-dark transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-chocolate-medium hover:text-chocolate-dark transition-colors">
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;