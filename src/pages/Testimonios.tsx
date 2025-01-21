import Navigation from "@/components/Navigation";
import { Smile, User } from "lucide-react";

const testimonios = [
  {
    id: 1,
    nombre: "María García",
    comentario: "¡El mejor chocolate vegano que he probado! Me encanta que sea saludable y tan delicioso.",
    imagen: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  },
  {
    id: 2,
    nombre: "Juan Pérez",
    comentario: "Increíble sabor y calidad. Los bombones son perfectos para regalo.",
    imagen: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  },
  {
    id: 3,
    nombre: "Ana López",
    comentario: "Me encanta que sea sin azúcar añadida. ¡Por fin puedo disfrutar del chocolate sin culpa!",
    imagen: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  }
];

const Testimonios = () => {
  return (
    <div className="min-h-screen bg-cream/50">
      <Navigation />
      <div className="pt-24 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-playfair text-chocolate-dark text-center mb-12">
          Lo que dicen nuestros clientes
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonios.map((testimonio) => (
            <div key={testimonio.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={testimonio.imagen} 
                alt={testimonio.nombre}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <User className="w-6 h-6 text-chocolate-medium mr-2" />
                  <h3 className="text-xl font-playfair text-chocolate-dark">{testimonio.nombre}</h3>
                </div>
                <div className="flex items-start mb-4">
                  <Smile className="w-6 h-6 text-gold mr-2 flex-shrink-0" />
                  <p className="text-chocolate-medium">{testimonio.comentario}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonios;