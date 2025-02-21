// productos.js
const productos = [
    // Productos Herbi
    { name: "Canela y clavo Herbi x25", price: 2.30, category: "filtrantes", marca: "herbi", image: "images/products/TCC HERBI X25 F1 (1).png", cant: "25"},
    { name: "Canela y clavo Herbi x100", price: 6.50, category: "filtrantes", marca: "herbi", image: "images/products/CANELA-Y-CLAVO-X100.png", cant: "100"},
    { name: "Anis Herbi caja x25", price: 2.30, category: "filtrantes", marca: "herbi", image: "images/products/ANIS HERBI X25 F1.jpg", cant: "25" },
    { name: "Anis Herbi caja x100", price: 6.50, category: "filtrantes", marca: "herbi", image: "images/products/ANIS-X100.jpg", cant: "100" },
    { name: "Boldo Herbi caja x100", price: 6.50, category: "filtrantes", marca: "herbi", image: "images/products/BOLDO-X100.jpg", cant: "100" },
    { name: "Mate de Coca Herbi caja x100", price: 6.50, category: "filtrantes", marca: "herbi", image: "images/products/MATE-DE-COCA-X100.jpg", cant: "100" },
    { name: "Relax Té Herbi caja x100", price: 6.50, category: "filtrantes", marca: "herbi", image: "images/products/RELAX-X100.jpg", cant: "100" },
    { name: "Durazno Herbi caja x100", price: 6.50, category: "filtrantes", marca: "herbi", image: "images/products/DURAZNO-X100.jpg", cant: "100" },
    { name: "Uña de Neko Herbi caja x100", price: 6.50, category: "filtrantes", marca: "herbi", image: "images/products/UNA-DE-GATO-X100.jpg", cant: "100" },
    { name: "Naranja Herbi caja x100", price: 6.50, category: "filtrantes", marca: "herbi", image: "images/products/TE-NARANJA-X100.jpg", cant: "100" },
    { name: "Manzanilla Herbi Caja x25", price: 2.30, category: "filtrantes", marca: "herbi", image: "images/products/MZN HERBI X25 F1 (1).png", cant: "25" },
    { name: "Manzanilla Herbi Caja x100", price: 6.50, category: "filtrantes", marca: "herbi", image: "images/products/MANZANILLA-X100.jpg", cant: "100" },
    { name: "Té Verde Adelgazante Herbi x25", price: 2.30, category: "filtrantes", marca: "herbi", image: "images/products/TE VERDE HERBI X25 F1 (1).png", cant: "25" },
    { name: "Té Verde Adelgazante Herbi x100", price: 6.50, category: "filtrantes", marca: "herbi", image: "images/products/TE-VERDE-HERBI-X100-F1.png", cant: "100" },
    { name: "Menta Muña Herbi x25", price: 2.30, category: "filtrantes", marca: "herbi", image: "images/products/MM HERBI X25 F1 (1).png", cant: "25" },
    { name: "Menta Muña Herbi x100", price: 6.50, category: "filtrantes", marca: "herbi", image: "images/products/MM-HERBI-X100-F1.png", cant: "100" },
    { name: "Té Menta Herbi x25", price: 2.30, category: "filtrantes", marca: "herbi", image: "images/products/HERBI MENTA X25 F1 (1).png", cant: "25" },
    { name: "Té Menta Herbi x100", price: 6.50, category: "filtrantes", marca: "herbi", image: "images/products/MENTA-HERBI-X100.png", cant: "100" },
    { name: "Té Muña Herbi x25", price: 2.30, category: "filtrantes", marca: "herbi", image: "images/products/HERBI MUÑA X25 F1 (1).png", cant: "25"},
    { name: "Té Muña Herbi x100", price: 6.50, category: "filtrantes", marca: "herbi", image: "images/products/MUÑA-HERBI-X100-F2.png", cant: "100" },
    { name: "Té Negro Puro Herbi x25", price: 2.30, category: "filtrantes", marca: "herbi", image: "images/products/TE NEGRO X25 F1 (1).png", cant: "25" },
    { name: "Té Negro Puro Herbi x100", price: 6.50, category: "filtrantes", marca: "herbi", image: "images/products/TE-NEGRO-HERBI-X100.png", cant: "100" },
    { name: "Felices Sueños Herbi x25", price: 2.30, category: "filtrantes", marca: "herbi", image: "images/products/FSUEÑOS-HERBI-X25-F1.png", cant: "25" },
    { name: "Té Digestivo Herbi x25", price: 2.30, category: "filtrantes", marca: "herbi", image: "images/products/DIGESTIVO HERBI X25 F1 (1).png", cant: "25" },
    { name: "Té Digestivo Herbi x100", price: 6.50, category: "filtrantes", marca: "herbi", image: "images/products/DIGESTIVO-HERBI-X100-F1.png", cant: "100" },
    { name: "Hierba Luisa Herbi x25", price: 2.30, category: "filtrantes", marca: "herbi", image: "images/products/HL HERBI X25 F1 (1).png", cant: "25" },
    { name: "Hierba Luisa Herbi x100", price: 6.50, category: "filtrantes", marca: "herbi", image: "images/products/HL-HERBI-X100-F1.png", cant: "100" },

    // Productos De'Villa
    { name: "Anis De'Villa Caja x25", price: 2.40, category: "filtrantes", marca: "villa", image: "images/products/ANIS DVILLA X25 F1 (1).png", cant: "25"},
    { name: "Manzanilla De'Villa Caja x25", price: 2.40, category: "filtrantes", marca: "villa", image: "images/products/MZN DVILLA X25 F1 (1).png", cant: "25"},
    { name: "Té Canela y Clavo De'Villa x25", price: 2.40, category: "filtrantes", marca: "villa", image: "images/products/TCC DVILLA X25 F1 (1).png", cant: "25"},
    { name: "Boldo De'Villa Caja x25", price: 2.40, category: "filtrantes", marca: "villa", image: "images/products/BOLDO DVILLA X25 F1 (1).png", cant: "25"},
    { name: "Flor de Jamaica De'Villa x25", price: 2.40, category: "filtrantes", marca: "villa", image: "images/products/FLOR DE JAMAICA DVILLA X25 F1 (1).png", cant: "25"},
    { name: "Menta Muña De'Villa x25", price: 2.40, category: "filtrantes", marca: "villa", image: "images/products/MENTA MUÑA DVILLA X25 F1 (1).png", cant: "25"},
    { name: "Té verde Adelgazante De'Villa x25", price: 2.40, category: "filtrantes", marca: "villa", image: "images/products/TE VERDE DVILLA X25 F1 (1).png", cant: "25"},

    { name: "Sol De'Villa Cusco 50u", price: 4.50, category: "chocolates", marca: "villa", image: "images/products/CHOCOLATE X50 1 (1).png", cant: "100"},
    { name: "Sol De'Villa Cusco Clavo y Canela 12u", price: 5.00, category: "chocolates", marca: "villa", image: "images/products/DISPLAY CHOCOLATE 2 (1).png", cant: "25"},

    // Productos Rapidin
    { name: "Detergente en Polvo Rapidin Limon 15kg", price: 1.4, category: "limpiadores", marca: "rapidin", image: "images/products/rapidin-limon.jpg", cant: "25"},
    { name: "Detergente en Polvo Rapidin Lirio 15kg", price: 1.4, category: "limpiadores", marca: "rapidin", image: "images/products/rapidin-lirio.jpg", cant: "25"},
];
