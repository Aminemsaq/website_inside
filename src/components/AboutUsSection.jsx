/* eslint-disable react/no-unescaped-entities */
import { FaUsers, FaRegClock, FaUserCheck } from "react-icons/fa";
import image1 from "../assets/f.webp";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AboutUsSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Calculate when to trigger animation (example: when section is 50% into view)
        if (sectionTop < windowHeight * 0.5) {
          setIsAnimated(true);
        } else {
          setIsAnimated(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.section
      className="bg-orange-600 py-24"
      id="about"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
        {/* Left Column for Image */}
        <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
          <motion.img
            src={image1}
            alt="About Gamir Academy"
            className={`w-90 lg:w-96 lg:ml-20 h-auto rounded-lg ${isAnimated ? "animate-fade-in" : ""}`}
            initial={{ opacity: 0, y: 50 }}
            animate={isAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Right Column for Text and Stats */}
        <div className="lg:w-1/2 px-2">
          <div className="lg:px-0 text-center lg:text-left">
            <motion.h2
              className={`text-4xl font-extrabold mb-6 text-white ${isAnimated ? "animate-fade-in" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About Gamir Academy
            </motion.h2>
            <motion.p
              className={`text-lg mb-8 text-white ${isAnimated ? "animate-fade-in" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Bienvenue à l'Académie Gamir, où l'apprentissage rencontre l'innovation. Notre mission est d'outiller les individus à travers une éducation exhaustive dans le domaine du trading et de la finance.
            </motion.p>

            {/* Cards Section */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 ${isAnimated ? "animate-fade-in" : ""}`}>
              {/* Card 1 */}
              <motion.div
                className="p-6 flex flex-col items-start text-slate-950 bg-white lg:bg-white lg:bg-transparent rounded-tr-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={isAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <FaUserCheck className="h-20 w-20 mb-4 ml-3 text-orange-600" />
                <div className="text-left lg:text-left">
                  <p className="text-4xl md:text-2xl font-semibold lg:text-slate-950">+1000</p>
                  <p className="text-2xl md:text-lg font-semibold mb-1 lg:text-slate-950">Etudiants,</p>
                  <p className="text-xl lg:text-sm text-gray-600 lg:text-slate-950">Expérimentez notre expertise.</p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="p-6 flex flex-col items-start text-slate-950 lg:text-white bg-white lg:bg-transparent border-2 border-white rounded-tr-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={isAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <FaUsers className="h-20 w-20 mb-4 text-orange-600 lg:text-white" />
                <div className="text-left lg:text-left">
                  <p className="text-4xl md:text-2xl font-semibold ">+70%</p>
                  <p className="text-2xl md:text-lg font-semibold mb-1">Taux de réussite,</p>
                  <p className="text-xl lg:text-sm text-gray-600 lg:text-white">Atteint par nos étudiants.</p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                className="p-6 flex flex-col items-start text-slate-950 lg:text-white bg-white lg:bg-transparent border-2 border-white rounded-tr-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={isAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <FaRegClock className="h-20 w-20 mb-4 text-orange-600 lg:text-white" />
                <div className="text-left lg:text-left">
                  <p className="text-4xl md:text-2xl font-semibold">+5</p>
                  <p className="text-2xl md:text-lg font-semibold mb-1">Années,</p>
                  <p className="text-xl lg:text-sm text-gray-600 lg:text-white">Dans l'industrie du trading.</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUsSection;
