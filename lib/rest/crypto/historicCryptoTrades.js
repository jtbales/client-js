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
// CF: https://polygon.io/docs/#!/Crypto/get_v1_historic_crypto_from_to_date
const request_1 = require("../transport/request");
const ICryptoTickJson_1 = require("./ICryptoTickJson");
exports.historicCryptoTrades = (apiKey, from, to, date, query = { limit: 100 }) => __awaiter(void 0, void 0, void 0, function* () {
    const raw = yield request_1.get(`/v1/historic/crypto/${from}/${to}/${date}`, apiKey, query);
    return {
        day: raw.day,
        map: raw.map,
        msLatency: raw.msLatency,
        status: raw.status,
        symbol: raw.symbol,
        ticks: raw.ticks.map(ICryptoTickJson_1.formatICryptoTickJsonRaw)
    };
});
