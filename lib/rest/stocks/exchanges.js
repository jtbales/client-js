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
// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v1_meta_exchanges
const request_1 = require("../transport/request");
const formatIExchangeRaw = (raw) => (Object.assign(Object.assign({}, raw), { marketIdentifierCode: raw.mic }));
exports.exchanges = (apiKey) => __awaiter(void 0, void 0, void 0, function* () { return (yield request_1.get(`/v1/meta/exchanges`, apiKey)).map(formatIExchangeRaw); });
