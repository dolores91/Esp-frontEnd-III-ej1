"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONTENT_BY_LOCALE = void 0;
const constants_1 = require("./constants");
const en_US_1 = require("./en-US");
const es_ES_1 = require("./es-ES");
const pt_BR_1 = require("./pt-BR");
const { EN_US, ES_ES, PT_BR } = constants_1.locales;
exports.CONTENT_BY_LOCALE = {
    [ES_ES]: es_ES_1.ES_CONTENT,
    [EN_US]: en_US_1.EN_CONTENT,
    [PT_BR]: pt_BR_1.PT_CONTENT,
};
