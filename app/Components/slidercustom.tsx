import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

type ImageProps = {
  src: string;
  alt?: string;
};

const SliderCustom: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Definir las imágenes dentro del componente
  const images: ImageProps[] = [
    {
      src: "fundacion.jpg",
      alt: "Imagen de Cleanwatt",
    },
    {
      src: "soluciones.jpg",
      alt: "Otra imagen",
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-700 ${
              index === currentIndex ? 'translate-x-0' : index < currentIndex ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 hover:bg-opacity-75"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 hover:bg-opacity-75"
      >
        Next
      </button>
    </div>
  );
};

export default SliderCustom;
