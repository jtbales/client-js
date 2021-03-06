"use strict";
// CF: https://polygon.io/docs/#!/Forex--Currencies/get_v1_historic_forex_from_to_date
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
const request_1 = require("../transport/request");
exports.formatIV1ForexRaw = (raw) => (Object.assign(Object.assign({}, raw), { ask: raw.a, bid: raw.b, timestamp: raw.t }));
const formatIHistoricForexTicksRaw = (raw) => (Object.assign(Object.assign({}, raw), { ticks: raw.ticks.map(exports.formatIV1ForexRaw) }));
exports.historicForexTicks = (apiKey, from, to, date, query) => __awaiter(void 0, void 0, void 0, function* () {
    return formatIHistoricForexTicksRaw(yield request_1.get(`/v1/historic/forex/${from}/${to}/${date}`, apiKey, query));
});
