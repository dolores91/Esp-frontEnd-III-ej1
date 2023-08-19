"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Spinner_module_css_1 = __importDefault(require("./Spinner.module.css"));
const Spinner = () => {
    return (<div className={Spinner_module_css_1.default['sk-chase']}>
            <div className={Spinner_module_css_1.default['sk-chase-dot']}></div>
            <div className={Spinner_module_css_1.default['sk-chase-dot']}></div>
            <div className={Spinner_module_css_1.default['sk-chase-dot']}></div>
            <div className={Spinner_module_css_1.default['sk-chase-dot']}></div>
            <div className={Spinner_module_css_1.default['sk-chase-dot']}></div>
            <div className={Spinner_module_css_1.default['sk-chase-dot']}></div>
        </div>);
};
exports.default = Spinner;
