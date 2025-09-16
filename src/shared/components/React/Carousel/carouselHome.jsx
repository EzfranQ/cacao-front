import React, { useState, useEffect, useRef } from 'react';

// --- Datos de las imágenes ---
const slidesData = [
    {
        image:
            "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2070&auto-format&fit-crop",
        alt: "Electrodomésticos de cocina modernos",
        title: "Electrodomésticos",
        subtitle: "Renueva tu cocina con la última tecnología",
    },
    {
        image:
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto-format&fit=crop",
        alt: "Muebles y decoración de bazar",
        title: "Bazar y Decoración",
        subtitle: "Encuentra el estilo perfecto para tu hogar",
    },
    {
        image:
            "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2070&auto-format&fit-crop",
        alt: "Herramientas y decoración para el jardín",
        title: "Jardín y Exteriores",
        subtitle: "Crea tu propio oasis al aire libre",
    },
    {
        image:
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto-format&fit=crop",
        alt: "Sala de estar moderna con un sofá",
        title: "Muebles para el Hogar",
        subtitle: "Comodidad y diseño en cada rincón",
    },
];

// --- Componente principal del Carrusel ---
export default function ProductCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const autoPlayRef = useRef(null);

    useEffect(() => {
        // Inicia el autoplay cuando el componente se monta
        autoPlayRef.current = setInterval(showNextSlide, 5000);

        // Limpia el intervalo cuando el componente se desmonta
        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, []); // El array vacío asegura que esto solo se ejecute al montar y desmontar

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const showNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    };

    const showPrevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length
        );
    };

    const resetAutoPlay = () => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }
        autoPlayRef.current = setInterval(showNextSlide, 5000);
    };

    return (
        <div className="relative w-full mx-auto overflow-hidden">
            {/* Contenedor de slides */}
            <div className="relative w-full h-[500px] overflow-hidden">
                {slidesData.map((slide, index) => {
                    const offset = index - currentIndex;
                    return (
                        <div
                            key={index}
                            className="absolute w-full h-full transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(${offset * 100}%)` }}
                        >
                            <img
                                src={slide.image}
                                alt={slide.alt}
                                className="w-full h-full object-cover"
                            />
                            {/* <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center text-center p-4">
                                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
                                    {slide.title}
                                </h2>
                                <p className="mt-2 text-lg md:text-xl text-white">
                                    {slide.subtitle}
                                </p>
                            </div> */}
                        </div>
                    );
                })}
            </div>

            {/* Flecha Izquierda */}
            <button
                onClick={() => {
                    showPrevSlide();
                    resetAutoPlay();
                }}
                // 1. Agrega la clase "group" al elemento padre (el botón)
                className="group absolute top-1/2 left-4 transform -translate-y-1/2 bg-white hover:cursor-pointer hover:bg-[#32adfe] p-3 h-16 w-8 shadow-md transition-all duration-300 z-10"
            >
                <i class="fa-solid fa-arrow-right rotate-180 group-hover:text-white text-[#32adfe] -translate-x-1.5"></i>

            </button>

            {/* Flecha Derecha */}
            <button
                onClick={() => {
                    showPrevSlide();
                    resetAutoPlay();
                }}
                // 1. Agrega la clase "group" al elemento padre (el botón)
                className="group absolute top-1/2 right-4 transform hover:cursor-pointer -translate-y-1/2 bg-white hover:bg-[#32adfe] p-3 h-16 w-8 shadow-md transition-all duration-300 z-10"
            >
<i class="fa-solid fa-arrow-right group-hover:text-white text-[#32adfe] -translate-x-1.5"></i>
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {slidesData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            goToSlide(index);
                            resetAutoPlay();
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-[#32adfe]" : "bg-white"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
