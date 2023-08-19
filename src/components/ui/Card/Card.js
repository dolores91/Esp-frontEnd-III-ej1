"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const router_1 = require("next/router");
const react_1 = __importDefault(require("react"));
const Card_module_css_1 = __importDefault(require("./Card.module.css"));
const image_1 = __importDefault(require("next/image"));
const Card = ({ character }) => {
    const router = (0, router_1.useRouter)();
    const handleClick = () => {
        router.push(`/character/${character.tail}`); // /character/000e0002
    };
    return (<div className={Card_module_css_1.default.card} onClick={handleClick}>
            <h3>{character.name}</h3>
            <image_1.default src={character.image} alt={character.name} width={180} height={250} priority={true}/>
        </div>);
};
exports.Card = Card;
