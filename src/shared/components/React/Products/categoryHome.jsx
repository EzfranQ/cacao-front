import React from 'react';

// Datos de las categorías para renderizar dinámicamente
const categories = [
    {
        name: 'Equipos Armados',
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
        <a href="#" className="group relative block bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 ease-in-out h-36 sm:h-40">
            {/* Fondo naranja con forma diagonal usando clip-path */}
            <div 
                className="absolute top-0 right-0 h-full w-full bg-[#32adfe]" 
                style={{ clipPath: 'polygon(45% 0, 100% 0, 100% 100%, 35% 100%)' }}
            ></div>
            
            {/* Contenido de la tarjeta (Texto e Imagen) */}
            <div className="relative h-full flex items-center justify-between">
                {/* Sección de Texto */}
                <div className="w-1/2 p-3 sm:p-4">
                    <h3 className="font-bold text-gray-800 text-sm sm:text-base text-center">{name}</h3>
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
        <div className="bg-gray-100 min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
            {/* Contenedor Principal */}
            <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                
                {/* Grid para las tarjetas de categoría */}
                {/* Es responsive: 2 columnas en móviles, 3 en tablets y 5 en escritorio */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
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
