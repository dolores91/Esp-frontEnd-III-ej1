"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
const head_1 = __importDefault(require("next/head"));
const react_1 = __importDefault(require("react"));
const Navbar_1 = require("../ui/Navbar");
const Layout = ({ children, title, description, keywords }) => {
    return (<>
            <head_1.default>
                <title>{title}</title>
                <meta charSet="utf-8"/>
                <meta name="author" content="Humberto Rivero"/>
                <meta name="description" content={description || "Amiibo API es una tienda de figuras interactivas que desbloquean contenido en tus juegos favoritos."}/>
                <meta name="keywords" content={keywords || "amiibo, nintendo, figuras, interactivas, juegos, videojuegos"}/>
                {/*Información compartida en redes sociales. Estos metadatos ayudan a las redes sociales y plataformas a mostrar vistas previas enriquecidas cuando los enlaces de la página se comparten. */}
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description || "Amiibo API es una tienda de figuras interactivas que desbloquean contenido en tus juegos favoritos."}/>
                <meta property="og:type" content="website"/>
                <meta property='og:image' content='/mario.jpg'/>

                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </head_1.default>
            <Navbar_1.Navbar />
            <main>{children}</main>
            <footer>Footer</footer>
        </>);
};
exports.Layout = Layout;
