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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = void 0;
const Home_module_css_1 = __importDefault(require("@/styles/Home.module.css"));
const Card_1 = require("@/components/ui/Card/Card");
const router_1 = require("next/router");
const layouts_1 = require("@/components/layouts");
const constants_1 = require("@/locale/constants");
const locale_1 = require("@/locale");
const services_1 = require("@/services");
const Home = ({ characters }) => {
    const { locale = constants_1.defaultLocale } = (0, router_1.useRouter)();
    const localeConten = locale_1.CONTENT_BY_LOCALE[locale];
    const { home } = localeConten;
    return (<>
      <layouts_1.Layout title='Home - Ecommerce'>
        <h1>{home.title}</h1>
        <div className={Home_module_css_1.default.grid}>
          {characters === null || characters === void 0 ? void 0 : characters.map((character) => (<Card_1.Card key={character.tail} character={character}/>))}
        </div>
      </layouts_1.Layout>
    </>);
};
const getStaticProps = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, services_1.getCharacters)();
    return {
        props: {
            characters: data
        }
    };
});
exports.getStaticProps = getStaticProps;
exports.default = Home;
