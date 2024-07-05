import { BsMouse } from 'react-icons/bs';
import ButtonWrapper from './ButtonWrapper';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section className="bg-slate-950 text-white h-screen overflow-hidden flex items-center justify-center" id="home">
      <div className="container mx-auto text-center lg:px-9">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-10 px-3">
          Découvrez le Trading<br /> Changez Votre Vie,
        </h1>
        <p className="text-lg md:text-2xl mb-12 px-6">
          Apprenez à trader en suivant des étapes simples et efficaces. Transformez vos finances et atteignez vos objectifs grâce à Gamir Academy.
        </p>
        <div className="mb-6">
          <ButtonWrapper />
        </div>
        <div className="mt-20">
          <div className="relative">
            <Link
              to="buy"
              smooth={true}
              duration={1500}
              offset={-70}
              spy={true}
              className="text-white cursor-pointer block"
              aria-label="Scroll down to buy section"
            >
              <BsMouse className="w-8 h-8 mx-auto relative z-10" />
              <p className="pt-3">Scroll Down</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
