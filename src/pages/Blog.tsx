import Navigation from "@/components/Navigation";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const articulos = [
  {
    id: 1,
    titulo: "Los beneficios del cacao para la salud",
    resumen: "Descubre por qué el cacao puro es considerado un superalimento y cómo puede mejorar tu salud.",
    imagen: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    fecha: "2024-02-15"
  },
  {
    id: 2,
    titulo: "Recetas saludables con chocolate",
    resumen: "Aprende a preparar postres deliciosos y saludables utilizando nuestro chocolate sin azúcar.",
    imagen: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    fecha: "2024-02-10"
  },
  {
    id: 3,
    titulo: "La historia del cacao peruano",
    resumen: "Conoce la rica tradición del cacao en Perú y su importancia en la cultura local.",
    imagen: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    fecha: "2024-02-05"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-cream/50">
      <Navigation />
      <div className="pt-24 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-playfair text-chocolate-dark text-center mb-12">
          Blog
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articulos.map((articulo) => (
            <div key={articulo.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={articulo.imagen} 
                alt={articulo.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <BookOpen className="w-5 h-5 text-chocolate-medium mr-2" />
                  <span className="text-sm text-chocolate-medium">{articulo.fecha}</span>
                </div>
                <h3 className="text-xl font-playfair text-chocolate-dark mb-2">{articulo.titulo}</h3>
                <p className="text-chocolate-medium mb-4">{articulo.resumen}</p>
                <Button 
                  className="w-full bg-chocolate-dark hover:bg-chocolate-medium text-cream"
                >
                  Leer más
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;