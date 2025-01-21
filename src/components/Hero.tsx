import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
          alt="Chocolate artesanal"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-chocolate-dark mb-6">
            Chocolate Artesanal
            <br />
            <span className="text-chocolate-medium">Saludable y Delicioso</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-chocolate-medium mb-8 max-w-2xl mx-auto">
            Sin azúcar añadida, vegano y libre de aceite de palma.
            El chocolate que tu cuerpo y mente disfrutarán.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-primary text-lg"
            onClick={() => navigate("/productos")}
          >
            Comprar Ahora
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;