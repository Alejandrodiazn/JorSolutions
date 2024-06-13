import React from 'react';

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading1: string;
  description1: string;
  heading2: string;
  description2: string;
  image1: ImageProps; 
  image2: ImageProps;
};

export type Section2colsProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Section2cols: React.FC<Section2colsProps> = (props) => {
  const { heading1, description1, heading2, description2, image1, image2 } = {
    ...Section2colsDefaults,
    ...props,
} as Props;

return (
    <section className="">
    <div className=" w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
        <div className='relative'>
          {/* Primera columna en dispositivos grandes */}
        <div className="md:col-span-1 py-16 md:py-24 lg:py-28">
            <div>
            </div>
            <div className="max-w-md mx-auto text-center"> {/* Centrado del contenido */}
            <div className="flex justify-center mb-5 md:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="92" height="87" viewBox="0 0 92 87" fill="none"><path d="M4 44.1144L42.725 5.42332C43.1764 4.97209 43.7124 4.61414 44.3022 4.36992C44.8921 4.1257 45.5244 4 46.1629 4C46.8014 4 47.4337 4.1257 48.0236 4.36992C48.6135 4.61414 49.1494 4.97209 49.6008 5.42332L88.3258 44.1144M13.7299 34.3931V78.1393C13.7299 80.8224 15.9094 83 18.5949 83H36.433V61.937C36.433 59.2539 38.6125 57.0763 41.298 57.0763H51.0279C53.7133 57.0763 55.8928 59.2539 55.8928 61.937V83H73.731C76.4164 83 78.5959 80.8224 78.5959 78.1393V34.3931M29.9464 83H65.6227" stroke="#24AAE1" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                {heading1}
              </h3>
              <p className="text-base text-text-alternative md:text-md">{description1}</p>
            </div>
            <div className="absolute inset-0 -z-10">
            {/* Usamos imágenes diferentes para cada sección */}
                <img src={image1.src} className="w-full h-full object-cover" alt={image1.alt} />
                <div className="absolute inset-0 bg-black/50" />
            </div>
        </div>
        </div>
        <div className='relative'>
          {/* Segunda columna en dispositivos grandes */}
        <div className="md:col-span-1 py-16 md:py-24 lg:py-28">
            <div className="max-w-md mx-auto text-center"> {/* Centrado del contenido */}
            <div className="flex justify-center mb-5 md:mb-6"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="69" height="80" viewBox="0 0 69 80" fill="none"><path d="M58.1058 11.3383C56.635 11.3362 55.1825 11.6642 53.8553 12.2982V9.92147C53.8562 7.55769 53.0128 5.27132 51.4771 3.47437C49.9414 1.67741 47.8144 0.488041 45.4794 0.120587C43.1443 -0.246866 40.7548 0.23176 38.7415 1.47022C36.7281 2.70867 35.2233 4.62552 34.4981 6.87532C32.9878 6.05612 31.2906 5.64334 29.5728 5.67743C27.8549 5.71152 26.1754 6.1913 24.6988 7.06978C23.2222 7.94825 21.9991 9.19527 21.1494 10.6887C20.2997 12.182 19.8526 13.8705 19.8518 15.5887V38.2577L18.4988 36.0864C17.1846 33.8184 15.0259 32.163 12.4947 31.4819C9.96349 30.8008 7.26558 31.1494 4.99067 32.4516C2.71577 33.7539 1.04891 35.9037 0.354432 38.4313C-0.340042 40.9589 -0.00564454 43.6586 1.28453 45.9404C6.95178 57.9018 11.5316 66.3849 16.7703 71.6874C22.0621 77.0571 28.0694 79.3452 36.8536 79.3452C45.1175 79.3359 53.0402 76.0489 58.8836 70.2054C64.7271 64.362 68.0141 56.4393 68.0234 48.1754V21.256C68.0234 18.6256 66.9785 16.103 65.1186 14.2431C63.2587 12.3832 60.7361 11.3383 58.1058 11.3383ZM62.3562 48.1754C62.3487 54.9368 59.6594 61.4191 54.8784 66.2002C50.0973 70.9812 43.615 73.6705 36.8536 73.678C29.6349 73.678 24.9842 71.9495 20.7976 67.7097C16.1115 62.9598 11.7973 54.9052 6.35672 43.422C6.32505 43.3516 6.28958 43.283 6.25046 43.2165C5.68681 42.24 5.53417 41.0796 5.82612 39.9906C6.11806 38.9015 6.83067 37.973 7.80718 37.4094C8.78369 36.8457 9.94411 36.6931 11.0332 36.985C12.1222 37.277 13.0507 37.9896 13.6143 38.9661C13.629 38.9943 13.6456 39.0216 13.6639 39.0476L20.2769 49.6737C20.6017 50.1978 21.0887 50.6017 21.664 50.8241C22.2392 51.0464 22.8712 51.075 23.4642 50.9055C24.0571 50.736 24.5786 50.3777 24.9495 49.885C25.3203 49.3923 25.5203 48.7921 25.5191 48.1754V15.5887C25.5191 14.4614 25.9669 13.3803 26.764 12.5832C27.5611 11.7861 28.6422 11.3383 29.7695 11.3383C30.8968 11.3383 31.9779 11.7861 32.775 12.5832C33.5722 13.3803 34.02 14.4614 34.02 15.5887V36.8409C34.02 37.5924 34.3185 38.3132 34.8499 38.8446C35.3813 39.376 36.1021 39.6745 36.8536 39.6745C37.6051 39.6745 38.3259 39.376 38.8573 38.8446C39.3887 38.3132 39.6872 37.5924 39.6872 36.8409V9.92147C39.6872 8.79418 40.135 7.71307 40.9321 6.91595C41.7292 6.11884 42.8104 5.67103 43.9376 5.67103C45.0649 5.67103 46.146 6.11884 46.9431 6.91595C47.7403 7.71307 48.1881 8.79418 48.1881 9.92147V36.8409C48.1881 37.5924 48.4866 38.3132 49.018 38.8446C49.5494 39.376 50.2702 39.6745 51.0217 39.6745C51.7732 39.6745 52.494 39.376 53.0254 38.8446C53.5568 38.3132 53.8553 37.5924 53.8553 36.8409V21.256C53.8553 20.1287 54.3031 19.0476 55.1002 18.2504C55.8974 17.4533 56.9785 17.0055 58.1058 17.0055C59.233 17.0055 60.3142 17.4533 61.1113 18.2504C61.9084 19.0476 62.3562 20.1287 62.3562 21.256V48.1754Z" fill="#349540"/>
            </svg>
            </div>
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                {heading2}
              </h3>
              <p className="text-base text-text-alternative md:text-md">{description2}</p>
            </div>
        </div>
            <div className="absolute inset-0 -z-10">
            {/* Usamos imágenes diferentes para cada sección */}
                <img src={image2.src} className="w-full h-full object-cover" alt={image2.alt} />
                <div className="absolute inset-0 bg-black/50" />
            </div>
        </div>
        </div>
    </div>
    </section>
);
};

export const Section2colsDefaults: Section2colsProps = {
  heading1: "Fundación Soy por que eres",
  description1:
    "Explora el corazón de nuestra Fundación 'Soy porque eres', donde cada  acción cuenta. Ofrecemos capacitaciones en validación de productos,  procuración de fondos y desarrollo de planes de negocio. Descubre cómo  cada paso que damos refleja nuestro compromiso con el crecimiento.",
  heading2: "VDG Soluciones integrales",
  description2:
    "En VDG Soluciones Integrales, estamos  convencidos de que siempre existe una solución para reducir el impacto  ambiental. Por eso, entregamos emplaye reciclado de alta calidad,  ayudando a nuestros clientes a minimizar costos y contribuir a un  entorno más sostenible.",
  image1: {
    src: "fundacion.jpg",
    alt: "Imagen de Cleanwatt",
  },
  image2: {
    src: "soluciones.jpg",
    alt: "Otra imagen",
  },
};

Section2cols.displayName = "Section2cols";
