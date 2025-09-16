import { useState, useEffect } from "react";

const productos = [
    { nombre: "Refrigerador Side by Side Inverter 500L", precio: "US$1,200.00", img: "https://www.pngmart.com/files/6/Digital-SLR-Camera-PNG-Photo.png" },
    { nombre: "Lavadora Carga Frontal 12kg Smart", precio: "US$750.00", img: "https://www.pngmart.com/files/7/Washing-Machine-PNG-Transparent-Image.png" },
    { nombre: "Horno de Microondas con Grill 30L", precio: "US$150.00", img: "https://www.pngmart.com/files/7/SSD-Transparent-PNG.png" },
    { nombre: "Smart TV 4K UHD 55 Pulgadas", precio: "US$550.00", img: "https://www.pngmart.com/files/5/Charger-PNG-HD.png" },
    { nombre: "Licuadora de Alta Potencia 2L", precio: "US$90.00", img: "https://www.pngmart.com/files/7/Stove-PNG-File.png" },
    { nombre: "Cocina a Gas 5 Hornallas Inoxidable", precio: "US$600.00", img: "https://www.pngmart.com/files/2/Microwave-Oven-PNG-File.png" },
];

export default function Carrusel() {
    const [startIndex, setStartIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) setItemsPerView(6);
            else if (window.innerWidth >= 1024) setItemsPerView(4);
            else if (window.innerWidth >= 768) setItemsPerView(3);
            else if (window.innerWidth >= 640) setItemsPerView(2);
            else setItemsPerView(1);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const next = () => {
        setStartIndex((prev) => (prev + 2) % productos.length);
    };

    const prev = () => {
        setStartIndex((prev) => (prev - 2 + productos.length) % productos.length);
    };

    return (
        <div>
            <div className=" pt-8 pb-4">
                <h2 className="text-2xl font-bold text-gray-800 text-left">Productos Destacados</h2>
            </div>
            <div className=" flex items-center justify-center">
                <div className="container mx-auto p-4 bg-white border rounded-xl border-[#32adfe] relative overflow-hidden">
                    {/* Contenedor deslizante */}
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${(startIndex * 100) / itemsPerView}%)` }}
                    >
                        {productos.concat(productos).map((producto, index) => (
                            <div
                                key={index}
                                className={`flex-shrink-0 w-70 p-2`}
                            >
                                <div className="product-card group text-center flex flex-col h-full bg-white rounded-lg shadow">
                                    <div className="relative p-4 rounded-lg flex items-center justify-center h-52">
                                        <img
                                            src={producto.img}
                                            alt={producto.nombre}
                                            className="max-h-full max-w-full transition-transform duration-300 group-hover:scale-105 object-contain"
                                        />
                                    </div>
                                    <div className="mt-4 flex-grow flex flex-col justify-between">
                                        <h3 className="font-medium text-gray-800 text-sm">{producto.nombre}</h3>
                                        <p className="text-lg font-bold text-[#32adfe] mt-2">{producto.precio}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Botones */}
                    <button
                        onClick={prev}
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#32adfe] text-white w-8 h-16 shadow flex items-center justify-center hover:bg-opacity-90 transition group hover:cursor-pointer hover:bg-gray-200 hover:text-[#32adfe] border-y-[#32adfe] border-y border-r-[#32adfe] border-r"
                    >
                        <i class="fa-solid fa-arrow-right rotate-180"></i>
                    </button>
                    <button
                        onClick={next}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#32adfe] text-white w-8 h-16 shadow flex items-center justify-center hover:bg-opacity-90 transition group hover:cursor-pointer hover:bg-gray-200 hover:text-[#32adfe] border-y-[#32adfe] border-y border-l-[#32adfe] border-l"
                    >
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>

        </div>
    );
}
