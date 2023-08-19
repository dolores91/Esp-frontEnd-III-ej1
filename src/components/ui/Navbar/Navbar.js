"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
const react_1 = __importDefault(require("react"));
const Navbar_module_css_1 = __importDefault(require("./Navbar.module.css"));
const router_1 = require("next/router");
const link_1 = __importDefault(require("next/link"));
const image_1 = __importDefault(require("next/image"));
const constants_1 = require("@/locale/constants");
function Navbar() {
    const { locale, asPath } = (0, router_1.useRouter)();
    return (<nav className={Navbar_module_css_1.default.navbar}>
            <div>
                <link_1.default href="/">
                    <image_1.default width={40} height={80} src="/mario-logo.webp" alt="logo"/>
                </link_1.default>
            </div>
            <ul>
                <li>
                    <link_1.default href="/nosotros">
                        Nosotros
                    </link_1.default>
                </li>
                <li>
                    <link_1.default href="/contacto">
                        Contacto
                    </link_1.default>
                </li>
                <li>
                    <link_1.default href="/carrito">
                        Carrito
                    </link_1.default>
                </li>
                <li className={Navbar_module_css_1.default.localeSwitch}>
                    <link_1.default href={asPath || '/'} locale={constants_1.locales.ES_ES}>
                        <p className={locale === constants_1.locales.ES_ES ? Navbar_module_css_1.default.active : ""}>
                            <image_1.default src="/spanish.png" alt="Español" width={20} height={20}/>
                            {constants_1.localeNames[constants_1.locales.ES_ES]}
                        </p>
                    </link_1.default>
                    <link_1.default href={asPath || '/'} locale={constants_1.locales.EN_US}>
                        <p className={locale === constants_1.locales.EN_US ? Navbar_module_css_1.default.active : ""}>
                            <image_1.default src="/english.png" alt="English" width={20} height={20}/>
                            {constants_1.localeNames[constants_1.locales.EN_US]}
                        </p>
                    </link_1.default>
                    <link_1.default href={asPath || '/'} locale={constants_1.locales.PT_BR}>
                        <p className={locale === constants_1.locales.PT_BR ? Navbar_module_css_1.default.active : ""}>
                            <image_1.default src="/portuguese.png" alt="Português" width={20} height={20}/>
                            {constants_1.localeNames[constants_1.locales.PT_BR]}
                        </p>
                    </link_1.default>
                </li>
            </ul>
        </nav>);
}
exports.Navbar = Navbar;
