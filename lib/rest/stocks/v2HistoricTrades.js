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
// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v2_ticks_stocks_trades_ticker_date
const request_1 = require("../transport/request");
exports.formatITradeV2Raw = (raw) => (Object.assign(Object.assign({}, raw), { ticker: raw.T, SIPTimestamp: raw.t, participantExchangeTimestamp: raw.y, tradeReportingFacilityTimestamp: raw.r, sequenceNumber: raw.q, tradeId: raw.i, exchange: raw.x, size: raw.s, conditions: raw.c, price: raw.p, tapeWhereTheTradeOccurred: raw.z }));
exports.formatIV2HistoricTradeResultRaw = (raw) => (Object.assign(Object.assign({}, raw), { results: raw.results.map(exports.formatITradeV2Raw) }));
exports.v2HistoricTrades = (apiKey, symbol, date, query) => __awaiter(void 0, void 0, void 0, function* () {
    return exports.formatIV2HistoricTradeResultRaw(yield request_1.get(`/v2/ticks/stocks/trades/${symbol}/${date}`, apiKey, query));
});
