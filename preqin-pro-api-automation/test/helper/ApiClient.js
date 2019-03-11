"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_promise_native_1 = __importDefault(require("request-promise-native"));
const json2typescript_1 = require("json2typescript");
const tokenResponseObject_1 = require("../ResponseObject/Token/tokenResponseObject");
let jsonConvert = new json2typescript_1.JsonConvert();
let accessToken = new tokenResponseObject_1.AccessToken();
let uri = "https://magenta.dev.pro.preqin.com/";
class ApiClient {
    Init() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Obtaining API authorisation token..');
            const options = {
                url: 'https://identity-magenta.dev.preqin.com/connect/token',
                headers: {
                    'Authorization': 'Basic cHJlcWluLmNvbS5jbGllbnQ6cHJlcWluLmNvbS5jbGllbnQuc2VjcmV0',
                    'Content-Type': 'application/json'
                },
                json: true,
                form: {
                    "username": "shreyasc@thoughtworks.com",
                    "grant_type": "password",
                    "password": "Symantec@1234"
                }
            };
            try {
                accessToken = jsonConvert.deserialize(yield request_promise_native_1.default.post(options), tokenResponseObject_1.AccessToken);
            }
            catch (err) {
                console.error(`Error getting authorisation token.', ${err}`);
                throw err;
            }
        });
    }
    ;
    Get(endPoint, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            if (!options.headers) {
                options.headers = {};
            }
            options.headers['Authorization'] = `Bearer ${accessToken.access_token}`;
            options.headers['Content-Type'] = 'application/json';
            options.json = true;
            response = yield request_promise_native_1.default.get(uri + endPoint, options);
            return response;
        });
    }
    ;
    Post(endPoint, payload = {}, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            if (!options.headers) {
                options.headers = {};
            }
            options.headers['Authorization'] = `Bearer ${accessToken.access_token}`;
            options.headers['Content-Type'] = 'application/json';
            options.json = true;
            options.body = payload;
            response = yield request_promise_native_1.default.post(uri + endPoint, options);
            return response;
        });
    }
    ;
}
exports.default = ApiClient;
//# sourceMappingURL=ApiClient.js.map