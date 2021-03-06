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
// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v2_ticks_stocks_nbbo_ticker_date
const request_1 = require("../transport/request");
exports.formatIQuoteV2Raw = (raw) => (Object.assign(Object.assign({}, raw), { ticker: raw.T, SIPTimestamp: raw.t, participantExchangeTimestamp: raw.y, tradeReportingFacilityTimestamp: raw.f, sequenceNumber: raw.q, conditions: raw.c, indicators: raw.i, bidPrice: raw.p, bidExchangeId: raw.x, bidSize: raw.s, askPrice: raw.P, askExchangeId: raw.X, askSize: raw.S, tapeWhereTradeOccurred: raw.z }));
const formatIV2HistoricQuotesResultRaw = (raw) => (Object.assign(Object.assign({}, raw), { results: raw.results && raw.results.map(exports.formatIQuoteV2Raw) }));
exports.v2HistoricQuotes = (apiKey, symbol, date, query) => __awaiter(void 0, void 0, void 0, function* () {
    return formatIV2HistoricQuotesResultRaw(yield request_1.get(`/v2/ticks/stocks/nbbo/${symbol}/${date}`, apiKey, query));
});
