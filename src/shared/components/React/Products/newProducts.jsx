import React, { useEffect, useState } from "react";

const NuevosIngresos = () => {
    const [productos, setProductos] = useState([]);

    // Simulamos una API con useEffect
    useEffect(() => {
        const fetchProductos = async () => {
            const data = [
                {
                    id: 1,
                    nombre: "Parlante 3X8",
                    precioOriginal: 5990,
                    precioOferta: 4990,
                    descuento: 17,
                    imagen: "https://placehold.co/400x400/1e1b4b/ffffff?text=Parlante",
                },
                {
                    id: 2,
                    nombre: "Panel WPC Wall Panel",
                    precioOriginal: 490,
                    precioOferta: 290,
                    descuento: 41,
                    imagen: "https://placehold.co/400x400/854d0e/ffffff?text=Panel+WPC",
                },
                {
                    id: 3,
                    nombre: "Valija de Viaje Grande 23KG",
                    precioOriginal: 2690,
                    precioOferta: 2190,
                    descuento: 19,
                    imagen:
                        "https://placehold.co/400x400/0e7490/ffffff?text=Valija+Grande",
                },
                {
                    id: 4,
                    nombre: "Valija de Viaje Mediana 18KG",
                    precioOriginal: 1990,
                    precioOferta: 1690,
                    descuento: 15,
                    imagen:
                        "https://placehold.co/400x400/365314/ffffff?text=Valija+Mediana",
                },
                {
                    id: 5,
                    nombre: "Limpiavidrio Magnético",
                    precioOriginal: 490,
                    precioOferta: 390,
                    descuento: 20,
                    imagen:
                        "https://placehold.co/400x400/701a75/ffffff?text=Limpiavidrio",
                },
                {
                    id: 6,
                    nombre: "Corta Verduras",
                    precioOriginal: 620,
                    precioOferta: 420,
                    descuento: 32,
                    imagen:
                        "https://placehold.co/400x400/9a3412/ffffff?text=Corta+Verduras",
                },
            ];

            setTimeout(() => setProductos(data), 1000);
        };

        fetchProductos();
    }, []);

    return (
        <div className="font-inter">
            <div className="container mx-auto py-8">
                {/* Título principal */}
            <div className=" pt-8 pb-4">
                <h2 className="text-2xl font-bold text-gray-800 text-left">Nuevos Ingresos</h2>
            </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Banner Responsive → primero en móviles */}
                    <div className="order-1 lg:order-2 flex flex-col shadow-lg bg-[#32adfe] rounded-lg">
                        <div className="p-6 text-center text-white flex-grow flex flex-col">
                            {/* Imagen Repartidor */}
                            <div className="mt-auto pt-6">
                                <img
                                    src="https://i.imgur.com/832sV7E.png"
                                    alt="Repartidor en moto"
                                    className="w-full max-h-60 object-contain mx-auto"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Grid de productos */}
                    <div className="order-2 lg:order-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {productos.length === 0 ? (
                            <p className="col-span-full text-center text-gray-500">
                                Cargando productos...
                            </p>
                        ) : (
                            productos.map((producto) => (
                                <div
                                    key={producto.id}
                                    className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group"
                                >
                                    <div className="relative">
                                        <img
                                            src={producto.imagen}
                                            alt={producto.nombre}
                                            className="w-full h-56 object-cover"
                                        />
                                        <div className="absolute top-2 right-2 bg-[#32adfe] text-white text-xs font-bold px-2 py-1 rounded-md">
                                            -{producto.descuento}%
                                        </div>
                                    </div>
                                    <div className="p-4 text-center flex-grow flex flex-col">
                                        <h3 className="font-bold text-gray-700 uppercase text-sm">
                                            {producto.nombre}
                                        </h3>
                                        <div className="my-3">
                                            <span className="text-gray-500 line-through">
                                                $ {producto.precioOriginal.toLocaleString()}
                                            </span>
                                            <span className="text-green-600 font-bold text-lg ml-2">
                                                $ {producto.precioOferta.toLocaleString()}
                                            </span>
                                        </div>
                                        <button className="mt-auto w-full bg-[#32adfe] text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
                                            COMPRAR
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NuevosIngresos;
