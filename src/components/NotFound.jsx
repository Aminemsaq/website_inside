/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="bg-slate-950 text-white h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Désolé, la page que vous recherchez n'existe pas.</p>
        <Link
          to="/website_inside/"
          className="text-orange-500 hover:underline text-lg"
        >
          Retour à la page d'accueil
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
