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
// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v1_open_close_symbol_date
const request_1 = require("../transport/request");
exports.dailyOpenClose = (apiKey, symbol, date) => __awaiter(void 0, void 0, void 0, function* () { return request_1.get(`/v1/open-close/${symbol}/${date}`, apiKey); });
