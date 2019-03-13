import request from 'request-promise-native';
import { JsonConvert, OperationMode, ValueCheckingMode, Any } from 'json2typescript';
import { AccessToken } from '../ResponseObject/Token/tokenResponseObject';

let accessToken: AccessToken;
let jsonConvert: JsonConvert = new JsonConvert();
// jsonConvert.operationMode = OperationMode.LOGGING;
jsonConvert.operationMode = OperationMode.DISABLE;
jsonConvert.ignorePrimitiveChecks = false;
jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL;

let uri = "https://magenta.dev.pro.preqin.com/";

export default class ApiClient {

    public async Init(): Promise<any> {

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

            accessToken = (<any>jsonConvert).deserialize(await request.post(options), AccessToken);

        } catch (err) {

            console.error(`Error getting authorisation token.', ${err}`);
            throw err;
        }
    };

    public async Get<T>(endPoint: string, statusCode: number, responseObject: new () => T, options: any = {}): Promise<T> {

        let response;
        let responseObj;

        if (!options.headers) {
            options.headers = {};
        }

        options.headers['Authorization'] = `Bearer ${accessToken.access_token}`
        options.headers['Content-Type'] = 'application/json';
        options.json = true;

        try {

            await request.get(uri + endPoint, options, function (err, httpResponse, body) {

                if (httpResponse.statusCode !== statusCode) {

                    console.error(`Get request failed with the following statusCode and statusMessage respectivetly: .', ${httpResponse.statusCode} ${httpResponse.statusMessage}`);
                    throw err;
                }
                if (httpResponse.statusCode !== 200) {

                    return httpResponse.statusMessage;

                } else {

                    response = body;
                    try {

                        responseObj = jsonConvert.deserialize<T>(response, responseObject);

                    } catch (err) {

                        console.log((<Error>err));
                        throw err;
                    }
                }
            });

        } catch (err) {

            console.error(`Error getting authorisation token.', ${err}`);
            throw err;
        }

        return responseObj as T;
    };

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

    public async Post<T>(endPoint: string, statusCode: number, responseObject: new () => T, payload: any = {}, options: any = {}): Promise<T> {

        let response;
        let responseObj;

        if (!options.headers) {
            options.headers = {};
        }

        options.headers['Authorization'] = `Bearer ${accessToken.access_token}`
        options.headers['Content-Type'] = 'application/json';
        options.json = true;
        options.body = payload;

        try {

            await request.post(uri + endPoint, options, function (err, httpResponse, body) {

                if (httpResponse.statusCode !== statusCode) {

                    console.error(`Post request failed with the following statusCode and statusMessage respectivetly: .', ${httpResponse.statusCode} ${httpResponse.statusMessage}`);
                    throw err;

                }
                if (httpResponse.statusCode !== 200) {

                    return httpResponse.statusMessage;

                } else {

                    response = body;
                    try {

                        responseObj = jsonConvert.deserialize<T>(response, responseObject);

                    } catch (err) {

                        console.log((<Error>err));
                        throw err;
                    }
                }
            });

        } catch (err) {

            console.error(`Error getting authorisation token.', ${err}`);
            throw err;
        }

        return responseObj as T;
    };
}