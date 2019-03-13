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
let accessToken;
let jsonConvert = new json2typescript_1.JsonConvert();
// jsonConvert.operationMode = OperationMode.LOGGING;
jsonConvert.operationMode = json2typescript_1.OperationMode.DISABLE;
jsonConvert.ignorePrimitiveChecks = false;
jsonConvert.valueCheckingMode = json2typescript_1.ValueCheckingMode.DISALLOW_NULL;
let uri = "https://magenta.dev.pro.preqin.com/";
class ApiClient {
    Init() {
        return __awaiter(this, void 0, void 0, function* () {
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
    Get(endPoint, statusCode, responseObject, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            let responseObj;
            if (!options.headers) {
                options.headers = {};
            }
            options.headers['Authorization'] = `Bearer ${accessToken.access_token}`;
            options.headers['Content-Type'] = 'application/json';
            options.json = true;
            try {
                yield request_promise_native_1.default.get(uri + endPoint, options, function (err, httpResponse, body) {
                    if (httpResponse.statusCode !== statusCode) {
                        console.error(`Get request failed with the following statusCode and statusMessage respectivetly: .', ${httpResponse.statusCode} ${httpResponse.statusMessage}`);
                        throw err;
                    }
                    if (httpResponse.statusCode !== 200) {
                        return httpResponse.statusMessage;
                    }
                    else {
                        response = body;
                        try {
                            responseObj = jsonConvert.deserialize(response, responseObject);
                        }
                        catch (err) {
                            console.log(err);
                            throw err;
                        }
                    }
                });
            }
            catch (err) {
                console.error(`Error getting authorisation token.', ${err}`);
                throw err;
            }
            return responseObj;
        });
    }
    ;
    // public async Post(endPoint: string, statusCode: number, payload: any = {}, options: any = {}): Promise<Any> {
    //     let response;
    //     if (!options.headers) {
    //         options.headers = {};
    //     }
    //     options.headers['Authorization'] = `Bearer ${accessToken.access_token}`
    //     options.headers['Content-Type'] = 'application/json';
    //     options.json = true;
    //     options.body = payload;
    //     try {
    //         await request.post(uri + endPoint, options, function (err, httpResponse, body) {
    //             if (httpResponse.statusCode !== statusCode) {
    //                 console.error(`Post request failed.', ${httpResponse.statusMessage}`);
    //                 throw err;
    //             } else {
    //                 response = body;
    //             }
    //         });
    //     } catch (err) {
    //         console.error(`Error getting authorisation token.', ${err}`);
    //         throw err;
    //     }
    //     return response;
    // };
    Post(endPoint, statusCode, responseObject, payload = {}, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            let responseObj;
            if (!options.headers) {
                options.headers = {};
            }
            options.headers['Authorization'] = `Bearer ${accessToken.access_token}`;
            options.headers['Content-Type'] = 'application/json';
            options.json = true;
            options.body = payload;
            try {
                yield request_promise_native_1.default.post(uri + endPoint, options, function (err, httpResponse, body) {
                    if (httpResponse.statusCode !== statusCode) {
                        console.error(`Post request failed with the following statusCode and statusMessage respectivetly: .', ${httpResponse.statusCode} ${httpResponse.statusMessage}`);
                        throw err;
                    }
                    if (httpResponse.statusCode !== 200) {
                        return httpResponse.statusMessage;
                    }
                    else {
                        response = body;
                        try {
                            responseObj = jsonConvert.deserialize(response, responseObject);
                        }
                        catch (err) {
                            console.log(err);
                            throw err;
                        }
                    }
                });
            }
            catch (err) {
                console.error(`Error getting authorisation token.', ${err}`);
                throw err;
            }
            return responseObj;
        });
    }
    ;
}
exports.default = ApiClient;
//# sourceMappingURL=ApiClient.js.map