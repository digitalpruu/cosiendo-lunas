const title = "Cosiendo Lunas";
const slogan = "Cada puntada, una historia";
const email = "ruedamarcela293@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los accesorios de ${title} y me gustaría obtener más información. ¡Gracias!`
);
const numeroWhatsApp = "3233351056";

const textos = {
    index: {
        title: `${title}`,
    },
    homeContent: {
        title: `${title}`,
    },
    about: {
        description1: "En Cosiendo Lunas, nos dedicamos a crear productos artesanales con pasión y dedicación. Bajo la dirección de Marcela Rueda León, nuestro emprendimiento busca ofrecer soluciones creativas y personalizadas a través de la costura. Cada prenda y artículo que confeccionamos está pensado para satisfacer las necesidades de nuestros clientes, fusionando diseño, calidad y detalles únicos.",
        description2: "Nos especializamos en productos hechos a mano que reflejan nuestra dedicación al trabajo artesanal. Ya sea que busques algo especial o personalizado, en Cosiendo Lunas, nos esforzamos por entregar piezas que cuenten una historia en cada puntada.",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "",
            p2: slogan,
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};

export default textos;
