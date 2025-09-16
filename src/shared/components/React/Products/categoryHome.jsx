import React from 'react';

// Datos de las categorías para renderizar dinámicamente
const categories = [
    {
        name: 'Bazar y Decoración',
        imageUrl: 'https://i.ibb.co/L6V2X8p/case.png',
        altText: 'PC Gamer',
    },
    {
        name: 'Notebooks',
        imageUrl: 'https://i.ibb.co/mHkC757/notebook.png',
        altText: 'Notebook',
    },
    {
        name: 'Consolas',
        imageUrl: 'https://i.ibb.co/XxdwK4t/console.png',
        altText: 'Consola de videojuegos',
    },
    {
        name: 'Monitores',
        imageUrl: 'https://i.ibb.co/vYvYm9q/monitor.png',
        altText: 'Monitor Gamer',
    },
    {
        name: 'Periféricos',
        imageUrl: 'https://i.ibb.co/PggY23t/headset.png',
        altText: 'Auriculares Gamer',
    },
];

// Componente para una tarjeta de categoría individual
const CategoryCard = ({ name, imageUrl, altText }) => {
    return (
        <a href="#" className="w-full md:w-64 group relative block bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 ease-in-out h-40">
            {/* Fondo naranja con forma diagonal usando clip-path */}
            <div
                className="absolute top-0 right-0 h-full w-full bg-[#32adfe]"
                style={{ clipPath: 'polygon(45% 0, 100% 0, 100% 100%, 35% 100%)' }}
            ></div>

            {/* Contenido de la tarjeta (Texto e Imagen) */}
            <div className="relative h-full flex items-center justify-between">
                {/* Sección de Texto */}
                <div className="w-1/2 p-3 sm:p-4">
                    <h3 className="font-bold text-gray-800 text-base md:text-lg sm:text-base text-center">{name}</h3>
                </div>
                {/* Sección de Imagen */}
                <div className="w-1/2 h-full flex justify-center items-center">
                    <img
                        src={imageUrl}
                        alt={altText}
                        className="h-28 sm:h-32 object-contain group-hover:scale-105 transition-transform duration-300 ease-in-out drop-shadow-lg"
                    />
                </div>
            </div>
        </a>
    );
};

// Componente principal que renderiza la sección de categorías
function App() {
    return (
        <div className="py-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            {/* Contenedor Principal */}
            <div className="mx-auto">

                {/* Grid para las tarjetas de categoría */}
                {/* Es responsive: 2 columnas en móviles, 3 en tablets y 5 en escritorio */}
                <div className="flex flex-wrap gap-4 sm:gap-11 justify-around md:justify-center xl:justify-around px-2 sm:px-0">
                    {/* 
                    grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6
                     */}
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.name}
                            name={category.name}
                            imageUrl={category.imageUrl}
                            altText={category.altText}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
