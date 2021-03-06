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
// CF: https://polygon.io/docs/#!/Reference/get_v1_meta_symbols_symbol_company
const request_1 = require("../transport/request");
exports.tickerDetails = (apiKey, symbol) => __awaiter(void 0, void 0, void 0, function* () {
    const raw = yield request_1.get(`/v1/meta/symbols/${symbol}/company`, apiKey);
    const formatted = Object.assign({}, raw);
    formatted.legalEntityIdentifier = raw.lei;
    formatted.standardIndustryClassification = raw.sic;
    return formatted;
});
