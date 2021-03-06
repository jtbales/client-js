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
const historicForexTicks_1 = require("./historicForexTicks");
const request_1 = require("../transport/request");
const formatIForexSnapshotAggRaw = (raw) => (Object.assign(Object.assign({}, raw), { close: raw.c, high: raw.h, low: raw.l, open: raw.o, volume: raw.v }));
const formatIForexSnapshotRaw = (raw) => ({
    ticker: raw.ticker,
    todaysChange: raw.todaysChange,
    todaysChangePerc: raw.todaysChangePerc,
    updated: raw.updated,
    day: formatIForexSnapshotAggRaw(raw.day),
    lastTrade: historicForexTicks_1.formatIV1ForexRaw(raw.lastTrade),
    min: formatIForexSnapshotAggRaw(raw.min),
    prevDay: formatIForexSnapshotAggRaw(raw.prevDay)
});
const formatIForexSnapshotAllTickersResponseRaw = (raw) => ({
    status: raw.status,
    tickers: raw.tickers.map(formatIForexSnapshotRaw)
});
// CF: https://polygon.io/docs/#!/Forex--Currencies/get_v2_snapshot_locale_global_markets_forex_tickers
exports.forexSnapshotAllTickers = (apiKey) => __awaiter(void 0, void 0, void 0, function* () {
    return formatIForexSnapshotAllTickersResponseRaw(yield request_1.get(`/v2/snapshot/locale/global/markets/forex/tickers`, apiKey));
});
// CF: https://polygon.io/docs/#!/Forex--Currencies/get_v2_snapshot_locale_global_markets_forex_direction
exports.forexSnapshotGainersLosers = (apiKey, direction = "gainers") => __awaiter(void 0, void 0, void 0, function* () {
    return formatIForexSnapshotAllTickersResponseRaw(yield request_1.get(`/v2/snapshot/locale/global/markets/forex/${direction}`, apiKey));
});
