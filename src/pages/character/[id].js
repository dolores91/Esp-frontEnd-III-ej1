"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = exports.getStaticPaths = void 0;
const Layout_1 = require("@/components/layouts/Layout");
const Card_1 = require("@/components/ui/Card");
const CharacterPage = ({ character }) => {
    return (<Layout_1.Layout title="Character">
            <Card_1.Card character={character}/>
        </Layout_1.Layout>);
};
const getStaticPaths = (locales) => __awaiter(void 0, void 0, void 0, function* () {
    const idiomas = locales.locales;
    const characters = yield fetch("https://www.amiiboapi.com/api/amiibo/");
    const resp = yield characters.json();
    const data = resp.amiibo.slice(0, 20);
    // Obtener los paths para los personajes junto con los locales
    const paths = data.flatMap((character) => idiomas.map((locale) => ({ params: { id: character.tail }, locale })));
    return {
        paths,
        fallback: false
    };
});
exports.getStaticPaths = getStaticPaths;
const getStaticProps = ({ params }) => __awaiter(void 0, void 0, void 0, function* () {
    const id = params === null || params === void 0 ? void 0 : params.id;
    try {
        const res = yield fetch(`https://www.amiiboapi.com/api/amiibo/?tail=${id}`);
        const data = yield res.json();
        const character = data.amiibo[0];
        return {
            props: {
                character,
            },
        };
    }
    catch (error) {
        console.error('No se pudo obtener el personaje', error);
        return {
            notFound: true
        };
    }
});
exports.getStaticProps = getStaticProps;
exports.default = CharacterPage;
