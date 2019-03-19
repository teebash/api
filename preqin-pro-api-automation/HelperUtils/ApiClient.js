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
let accessTokenResponseObject = new tokenResponseObject_1.AccessTokenResponseObject;
let jsonConvert = new json2typescript_1.JsonConvert();
// jsonConvert.operationMode = OperationMode.LOGGING;
// jsonConvert.operationMode = OperationMode.DISABLE;
// jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL;
jsonConvert.valueCheckingMode = json2typescript_1.ValueCheckingMode.ALLOW_OBJECT_NULL;
jsonConvert.valueCheckingMode = json2typescript_1.ValueCheckingMode.ALLOW_NULL;
jsonConvert.ignorePrimitiveChecks = false;
let uri = "https://magenta.dev.pro.preqin.com/";
class ApiClient {
    Get(endPoint, statusCode, responseObject, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            accessTokenResponseObject = yield this.Init();
            let response = undefined;
            let responseObj = undefined;
            if (!options.headers) {
                options.headers = {};
            }
            options.headers['Authorization'] = `Bearer ${accessTokenResponseObject.access_token}`;
            options.headers['Content-Type'] = 'application/json';
            options.json = true;
            yield request_promise_native_1.default.get(uri + endPoint, options, function (err, httpResponse, body) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (httpResponse.statusCode !== statusCode) {
                        console.error(`Get request failed with the following statusCode and statusMessage respectivetly: ', ${httpResponse.statusCode} ${httpResponse.statusMessage}`);
                        throw err;
                    }
                    else {
                        response = yield body;
                        try {
                            responseObj = yield jsonConvert.deserialize(response, responseObject);
                        }
                        catch (err) {
                            console.error(err);
                            throw err;
                        }
                    }
                });
            });
            return yield responseObj;
        });
    }
    ;
    Post(endPoint, requestBody = {}, statusCode, responseObject, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            accessTokenResponseObject = yield this.Init();
            let response;
            let responseObj;
            if (!options.headers) {
                options.headers = {};
            }
            options.headers['Authorization'] = `Bearer ${accessTokenResponseObject.access_token}`;
            options.headers['Content-Type'] = 'application/json';
            options.json = true;
            options.body = requestBody;
            yield request_promise_native_1.default.post(uri + endPoint, options, function (err, httpResponse, body) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (httpResponse.statusCode !== statusCode) {
                        console.error(`Post request failed with the following statusCode and statusMessage respectivetly: ', ${httpResponse.statusCode} ${httpResponse.statusMessage}`);
                        throw err;
                    }
                    else {
                        response = yield body;
                        try {
                            responseObj = yield jsonConvert.deserialize(response, responseObject);
                        }
                        catch (err) {
                            console.error(err);
                            throw err;
                        }
                    }
                });
            });
            return yield responseObj;
        });
    }
    ;
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
                accessTokenResponseObject = jsonConvert.deserialize(yield request_promise_native_1.default.post(options), tokenResponseObject_1.AccessTokenResponseObject);
                return yield accessTokenResponseObject;
            }
            catch (err) {
                console.error(`Error getting authorisation token.', ${err}`);
                throw err;
            }
        });
    }
    ;
}
exports.ApiClient = ApiClient;
//# sourceMappingURL=ApiClient.js.map