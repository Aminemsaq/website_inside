import React, { useState } from "react";
import ReactPlayer from 'react-player';
import { FaPlay } from 'react-icons/fa';
import webpImage from '../assets/thumbnailvideo.webp';

const embedId = "IG52nIxyNTU";

const VideoSection = () => {
  const [playing, setPlaying] = useState(false);

  const handleThumbnailClick = () => {
    setPlaying(true);
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-800">
          Explorez notre Cours Offerts
        </h2>
        <p className="text-lg mb-8 px-6 lg:px-32 text-gray-600">
          Explorez les bases du trading et découvrez des stratégies avancées pour réussir sur les marchés financiers. Transformez votre potentiel financier avec notre cours en ligne.
        </p>
        <div className="flex justify-center px-5">
          <div className="relative w-full md:w-5/6 lg:w-5/6 border-orange-600 border-x-2" style={{ paddingBottom: '45.25%', height: 0 }}>
            {playing ? (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${embedId}`}
                playing={playing}
                controls
                width="100%"
                height="100%"
                className="absolute top-0 left-0 w-full h-full"
              />
            ) : (
              <>
                <img
                  src={webpImage}
                  alt="Video Thumbnail"
                  className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
                  width="1000"
                  height="563"
                  onClick={handleThumbnailClick}
                />
                <div
                  className="absolute top-0 left-0 w-full h-full flex items-center justify-center cursor-pointer"
                  onClick={handleThumbnailClick}
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} // Semi-transparent black overlay
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black bg-opacity-50">
                    <FaPlay className="text-white w-8 h-8 ml-1 cursor-pointer" />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
