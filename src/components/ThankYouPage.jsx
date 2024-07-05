/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// ThankYouPage.jsx

import React from 'react';

const ThankYouPage = () => {
  return (
    <div className="bg-slate-950 min-h-screen flex justify-center items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-4 sm:p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Merci pour votre inscription !</h2>
          <p className="text-center text-gray-600 mb-4">
            Nous avons bien reçu vos informations. Nous vous contacterons sous peu.
          </p>
          <div className="text-center">
            <a
              href="/"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Retour à l'accueil
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
