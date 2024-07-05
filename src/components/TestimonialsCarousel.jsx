import React, { useState, useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import ReactPlayer from 'react-player/lazy';

const testimonials = [
  {
    id: 1,
    videoId: "zHYGTSsZg2M",
    author: "@Mehdi & Kamal",
    subtitle: "Découvrez comment Gamir Academy a transformé mes compétences en trading et boosté ma confiance financière.",
    thumbnail: "https://img.youtube.com/vi/zHYGTSsZg2M/maxresdefault.jpg"
  },
  {
    id: 2,
    videoId: "WzfKI2XeeNg",
    author: "@Zineb",
    subtitle: "Comment l'Académie Gamir a transformé mes compétences en trading, élargissant mes perspectives financières et renforçant ma confiance dans les marchés.",
    thumbnail: "https://img.youtube.com/vi/WzfKI2XeeNg/maxresdefault.jpg"
  },
  {
    id: 3,
    videoId: "GWKrEVDs9q8",
    author: "@Gamir Aymane",
    subtitle: "Découvrez la différence dans l'apprentissage du trading : entre les méthodes traditionnelles et l'expertise de l'Académie Gamir.",
    thumbnail: "https://img.youtube.com/vi/GWKrEVDs9q8/maxresdefault.jpg"
  }
];

const TestimonialsCarousel = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const flickityRef = React.useRef(null);

  useEffect(() => {
    const flickityOptions = {
      wrapAround: true,
      autoPlay: 1500,
      pauseAutoPlayOnHover: true,
      prevNextButtons: true,
      freeScroll: true,
      contain: true,
      hash: true,
      // Ensure touch events are passive
      touchVerticalScroll: false,
      dragThreshold: 10,
    };

    flickityRef.current = new Flickity('.carousel', flickityOptions);

    // Clean up Flickity instance on component unmount
    return () => {
      flickityRef.current.destroy();
    };
  }, []);

  const handleClick = (id) => {
    setPlayingVideo(id === playingVideo ? null : id);
  };

  return (
    <section className="bg-gray-100 py-20" id="testimonials">
      <div className="container mx-auto px-4 md:px-0 max-w-screen-lg">
        <h2 className="text-4xl font-extrabold mb-8 text-gray-800 text-center">Testimonials</h2>
        <div className="carousel relative overflow-hidden">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="carousel-cell px-2">
              {playingVideo === testimonial.id ? (
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${testimonial.videoId}`}
                  width="100%"
                  height="240px"
                  controls
                  playing
                  config={{
                    youtube: {
                      playerVars: {
                        modestbranding: 1,
                      },
                    },
                  }}
                />
              ) : (
                <div
                  className="relative cursor-pointer"
                  onClick={() => handleClick(testimonial.id)}
                >
                  <img
                    src={testimonial.thumbnail}
                    alt={`Thumbnail for ${testimonial.author}`}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-white bg-black bg-opacity-50 rounded-full p-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
              <p className="mt-4 text-lg font-semibold">{testimonial.author}</p>
              <p className="text-sm text-gray-600">{testimonial.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
