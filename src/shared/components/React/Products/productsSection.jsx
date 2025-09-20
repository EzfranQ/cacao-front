import React, { useState, useEffect } from 'react';

// --- Íconos SVG ---
const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
);

const MinusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
    </svg>
);

const GridIcon = ({ isActive }) => (
    <svg className={`h-6 w-6 ${isActive ? 'text-black' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 3a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1H4zM3 8a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zM4 13a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1H4zM8 4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM9 8a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V9a1 1 0 00-1-1H9zM8 14a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2zM14 3a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2zM13 8a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V8zM14 13a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1h-2z" />
    </svg>
);

const ListIcon = ({ isActive }) => (
    <svg className={`h-6 w-6 ${isActive ? 'text-black' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

// --- Datos Falsos (Simulando una API) ---
const mockCategories = [
    { id: 'all_products', name: 'TODOS LOS PRODUCTOS' }, // Nuevo: Categoría para mostrar todos los productos
    { id: 'last_chance', name: 'LAST CHANCE' },
    {
        id: 'equipos_armados',
        name: 'EQUIPOS ARMADOS',
        subcategories: [
            { id: 'pc_gaming', name: 'PC Gaming' },
            { id: 'pc_oficina', name: 'PC Oficina' }
        ]
    },
    {
        id: 'notebooks',
        name: 'NOTEBOOKS',
        subcategories: [
            { id: 'notebook_gamer', name: 'Gamer' },
            { id: 'notebook_ultrabook', name: 'Ultrabook' }
        ]
    },
    { id: 'tablets', name: 'TABLETS' },
    { id: 'smartwatch', name: 'SMARTWATCH' },
];

// Combine all products into a single array for the 'all_products' category
const allProductsArray = [
    ...[
        { id: 1, name: 'Tablet Xiaomi Redmi Pad Se 4gb 128gb Mint Green', price: 199.99, imageUrl: 'https://placehold.co/400x400/a3e635/ffffff?text=Redmi+Pad+SE' },
        { id: 2, name: 'Tablet Xiaomi Redmi Pad Se 4gb 128gb Lavender Purple', price: 199.99, imageUrl: 'https://placehold.co/400x400/c4b5fd/ffffff?text=Redmi+Pad+SE' },
        { id: 3, name: 'Tablet Xiaomi Redmi Pad Se 8gb 256gb Graphite Grey', price: 250.00, imageUrl: 'https://placehold.co/400x400/6b7280/ffffff?text=Redmi+Pad+SE' },
        { id: 4, name: 'Tablet Pro Series X 128gb', price: 350.50, imageUrl: 'https://placehold.co/400x400/3b82f6/ffffff?text=Tablet+Pro+X' },
        { id: 5, name: 'Tablet Lite Edition 64gb', price: 150.00, imageUrl: 'https://placehold.co/400x400/f97316/ffffff?text=Tablet+Lite' },
        { id: 6, name: 'Tablet Ultra Max 512gb', price: 599.00, imageUrl: 'https://placehold.co/400x400/ef4444/ffffff?text=Tablet+Ultra' },
    ],
    ...[
        { id: 7, name: 'Notebook Gamer Pro G7 16GB RAM', price: 1250.00, imageUrl: 'https://placehold.co/400x400/1f2937/ffffff?text=Gamer+Pro+G7' },
        { id: 8, name: 'Notebook SlimBook Air 8GB RAM', price: 950.00, imageUrl: 'https://placehold.co/400x400/d1d5db/000000?text=SlimBook+Air' },
    ],
    ...[
        { id: 11, name: 'Notebook Alienware m15', price: 1800.00, imageUrl: 'https://placehold.co/400x400/be185d/ffffff?text=Alienware' },
        { id: 12, name: 'Notebook ROG Zephyrus', price: 1650.00, imageUrl: 'https://placehold.co/400x400/16a34a/ffffff?text=ROG' },
    ],
    ...[
        { id: 9, name: 'Smartwatch Fit Pro 2', price: 220.00, imageUrl: 'https://placehold.co/400x400/f87171/ffffff?text=Fit+Pro+2' },
    ],
    ...[
        { id: 10, name: 'PC Gaming Titan X', price: 2100.00, imageUrl: 'https://placehold.co/400x400/7c3aed/ffffff?text=Titan+X' },
    ],
];


const allMockProducts = {
    all_products: allProductsArray,
    tablets: allProductsArray.filter(p => [1, 2, 3, 4, 5, 6].includes(p.id)),
    notebooks: allProductsArray.filter(p => [7, 8].includes(p.id)),
    notebook_gamer: allProductsArray.filter(p => [11, 12].includes(p.id)),
    smartwatch: allProductsArray.filter(p => [9].includes(p.id)),
    pc_gaming: allProductsArray.filter(p => [10].includes(p.id)),
};


// --- Componentes ---
const CategorySidebar = ({
    categoryPath,
    onSelectCategory,
    expandedCategories,
    onToggleExpand
}) => {

    const renderCategory = (category, isSubcategory = false) => {
        const isSelected = categoryPath.some(p => p.id === category.id);
        const isExpanded = expandedCategories[category.id];

        return (
            <li key={category.id} className={`${isSubcategory ? 'pl-4' : ''}`}>
                <div className={`flex justify-between items-center py-2 cursor-pointer ${isSelected ? 'font-bold text-black' : 'font-semibold text-gray-700 hover:text-black'}`}>
                    <span onClick={() => onSelectCategory(category)} className="flex-grow">
                        {category.name}
                    </span>
                    {category.subcategories && (
                        <button onClick={() => onToggleExpand(category.id)} className="p-1">
                            {isExpanded ? <MinusIcon /> : <PlusIcon />}
                        </button>
                    )}
                </div>
                {isExpanded && category.subcategories && (
                    <ul>
                        {category.subcategories.map(sub => renderCategory(sub, true))}
                    </ul>
                )}
            </li>
        );
    };

    return (
        <div className="w-full lg:w-1/5 pr-8 mb-8 lg:mb-0 text-sm">
            <h2 className="text-base font-bold mb-4">Categorías De Productos</h2>
            <ul>
                {mockCategories.map(category => renderCategory(category))}
            </ul>
        </div>
    );
};

const ProductCard = ({ product }) => (
    <div className="text-center group">
        <div className="bg-gray-100 p-4 rounded-lg mb-2 overflow-hidden">
            <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300" />
        </div>
        <h3 className="text-sm font-semibold text-gray-700 mb-1 h-10">{product.name}</h3>
        <p className="text-md font-bold text-red-500">US${product.price.toFixed(2)}</p>
    </div>
);

const ProductSkeleton = () => (
    <div className="animate-pulse">
        <div className="bg-gray-200 rounded-lg h-48 w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
        <div className="h-6 bg-gray-200 rounded w-1/4 mx-auto"></div>
    </div>
);


// --- Componente Principal ---
export default function App() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState('precio');
    const [viewMode, setViewMode] = useState('grid');
    // Inicializar con la categoría 'all_products' para mostrar todo al inicio.
    const [categoryPath, setCategoryPath] = useState([{ id: 'all_products', name: 'TODOS LOS PRODUCTOS' }]);
    const [expandedCategories, setExpandedCategories] = useState({});

    useEffect(() => {
        setIsLoading(true);
        const currentCategory = categoryPath[categoryPath.length - 1];

        // Maneja el caso inicial donde categoryPath puede estar vacío o no definido
        const categoryId = currentCategory?.id || 'all_products';

        const timer = setTimeout(() => {
            // Usa el nuevo key 'all_products' para obtener todos los productos
            const categoryProducts = allMockProducts[categoryId] || [];
            let sortedProducts = [...categoryProducts];

            if (sortOrder === 'precio-asc') {
                sortedProducts.sort((a, b) => a.price - b.price);
            } else if (sortOrder === 'precio-desc') {
                sortedProducts.sort((a, b) => b.price - a.price);
            }

            setProducts(sortedProducts);
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [sortOrder, categoryPath]);

    const handleSelectCategory = (category) => {
        let newPath = [];

        if (category.id === 'all_products') {
            // Si se selecciona "TODOS LOS PRODUCTOS", reinicia la ruta de la categoría
            newPath = [{ id: 'all_products', name: 'TODOS LOS PRODUCTOS' }];
        } else {
            const parent = mockCategories.find(parentCat =>
                parentCat.subcategories?.some(sub => sub.id === category.id)
            );

            if (parent) {
                newPath = [
                    { id: parent.id, name: parent.name },
                    category
                ];
            } else {
                newPath = [category];
            }
        }
        setCategoryPath(newPath);
    };

    const handleToggleExpand = (categoryId) => {
        setExpandedCategories(prev => ({
            ...prev,
            [categoryId]: !prev[categoryId]
        }));
    };

    return (
        <div className="font-sans bg-white pt-5 pb-24">
            <div className="container mx-auto px-10">

                <div className="text-sm text-gray-500 mb-6 uppercase border-b border-gray-200 pb-5 flex gap-x-2">
                    {/* Al hacer clic en "SHOP", se restablece la categoría para mostrar todos los productos */}
                    <a href="#">
                        <i class="fa-solid fa-house"></i>
                    </a>
                    <span className="text-gray-400 mx-1">&gt;</span>
                    <span className="cursor-pointer" onClick={() => handleSelectCategory(mockCategories[0])}>SHOP</span>
                    {categoryPath.map(cat => (
                        <React.Fragment key={cat.id}>
                            <span className="text-gray-400 mx-1">&gt;</span>
                            <a href='#' className="font-semibold text-gray-700">{cat.name}</a>
                        </React.Fragment>
                    ))}
                </div>

                <div className="flex flex-col lg:flex-row mt-12">
                    <CategorySidebar
                        categoryPath={categoryPath}
                        onSelectCategory={handleSelectCategory}
                        expandedCategories={expandedCategories}
                        onToggleExpand={handleToggleExpand}
                    />

                    <main className="w-full lg:w-4/5">
                        <div className="flex flex-wrap items-center justify-between b-4 mb-6 gap-4">
                            <div className="flex items-center gap-2">
                                <label htmlFor="sort-by" className="text-sm text-gray-600">Ordenar por:</label>
                                <select
                                    id="sort-by"
                                    className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                                    value={sortOrder}
                                    onChange={(e) => setSortOrder(e.target.value)}
                                >
                                    <option value="precio">Ordenar por precio</option>
                                    <option value="precio-asc">Precio: de menor a mayor</option>
                                    <option value="precio-desc">Precio: de mayor a menor</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <label htmlFor="show-count" className="text-sm text-gray-600">Mostrar:</label>
                                    <select id="show-count" className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-black">
                                        <option value="12">12</option>
                                        <option value="24">24</option>
                                        <option value="36">36</option>
                                    </select>
                                </div>
                                <div className="flex items-center border border-gray-300 rounded-md">
                                    <button onClick={() => setViewMode('grid')} className={`p-1.5 rounded-l-md ${viewMode === 'grid' ? 'bg-gray-200' : ''}`}>
                                        <GridIcon isActive={viewMode === 'grid'} />
                                    </button>
                                    <button onClick={() => setViewMode('list')} className={`p-1.5 rounded-r-md ${viewMode === 'list' ? 'bg-gray-200' : ''}`}>
                                        <ListIcon isActive={viewMode === 'list'} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-[400px] mt-8">
                            {isLoading ? (
                                Array.from({ length: 6 }).map((_, index) => <ProductSkeleton key={index} />)
                            ) : products.length > 0 ? (
                                products.map(product => <ProductCard key={product.id} product={product} />)
                            ) : (
                                <div className="col-span-full text-center text-gray-500 pt-16">
                                    No hay productos en esta categoría.
                                </div>
                            )}
                        </div>
                    </main>
                </div>

            </div>
        </div>
    );
}
