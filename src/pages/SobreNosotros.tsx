import Navigation from "@/components/Navigation";
import { Leaf, Package, User } from "lucide-react";

const SobreNosotros = () => {
  return (
    <div className="min-h-screen bg-cream/50">
      <Navigation />
      <div className="pt-24 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-playfair text-chocolate-dark text-center mb-8">
          Nuestra Historia
        </h1>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12">
          <p className="text-lg text-chocolate-medium mb-6">
            Chocodableperu nace de la pasión por el cacao peruano y el deseo de ofrecer un chocolate 
            saludable, artesanal y accesible para todos. Nos enorgullece producir chocolates sin azúcar 
            añadida, veganos y sin aceite de palma, siempre respetando las tradiciones del cultivo del cacao.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Leaf className="w-12 h-12 mx-auto mb-4 text-chocolate-medium" />
            <h3 className="text-xl font-playfair text-chocolate-dark mb-2">Ingredientes Naturales</h3>
            <p className="text-chocolate-medium">100% cacao peruano orgánico y ingredientes naturales seleccionados.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Package className="w-12 h-12 mx-auto mb-4 text-chocolate-medium" />
            <h3 className="text-xl font-playfair text-chocolate-dark mb-2">Producción Artesanal</h3>
            <p className="text-chocolate-medium">Cada chocolate es elaborado con dedicación y técnicas artesanales.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <User className="w-12 h-12 mx-auto mb-4 text-chocolate-medium" />
            <h3 className="text-xl font-playfair text-chocolate-dark mb-2">Compromiso Social</h3>
            <p className="text-chocolate-medium">Trabajamos directamente con agricultores locales, garantizando comercio justo.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;