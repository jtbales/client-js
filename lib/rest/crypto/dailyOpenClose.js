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
const request_1 = require("../transport/request");
const ICryptoTickJson_1 = require("./ICryptoTickJson");
// CF: https://polygon.io/docs/#!/Crypto/get_v1_open_close_crypto_from_to_date
exports.cryptoDailyOpenClose = (apiKey, from, to, date) => __awaiter(void 0, void 0, void 0, function* () {
    const raw = yield request_1.get(`/v1/open-close/crypto/${from}/${to}/${date}`, apiKey);
    const data = {
        symbol: raw.symbol,
        isUTC: raw.isUTC,
        day: raw.day,
        open: raw.open,
        close: raw.close
    };
    if (raw.openTrades) {
        data.openTrades = raw.openTrades.map(ICryptoTickJson_1.formatICryptoTickJsonRaw);
    }
    if (raw.closingTrades) {
        data.closingTrades = raw.closingTrades.map(ICryptoTickJson_1.formatICryptoTickJsonRaw);
    }
    return data;
});
