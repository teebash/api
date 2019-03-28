import request from 'request-promise-native';
import { JsonConvert, OperationMode, ValueCheckingMode } from 'json2typescript';
import { AccessTokenResponseObject } from '../ResponseObject/Token/tokenResponseObject';

let accessTokenResponseObject = new AccessTokenResponseObject;
let jsonConvert: JsonConvert = new JsonConvert();
// jsonConvert.operationMode = OperationMode.LOGGING;
// jsonConvert.operationMode = OperationMode.DISABLE;
// jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL;
// jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_OBJECT_NULL;
// jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;
jsonConvert.ignorePrimitiveChecks = false;

let uri = "https://magenta.dev.pro.preqin.com/";

export class ApiClient {

    public async Get<T>(endPoint: string, statusCode: number, responseObject?: new () => T, options: any = {}): Promise<T> {

        accessTokenResponseObject = await this.Init();
        let response = undefined;
        let responseObj = undefined;

        if (!options.headers) {
            options.headers = {};
        }

        options.headers['Authorization'] = `Bearer ${accessTokenResponseObject.access_token}`
        options.headers['Content-Type'] = 'application/json';
        options.json = true;

        await request.get(uri + endPoint, options, async function (err, httpResponse, body) {

            if (httpResponse.statusCode !== statusCode) {

                console.error(`Get request failed with the following statusCode : ${httpResponse.statusCode} and statusMessage : ${httpResponse.statusMessage}`);
                throw err;

            } else {

                response = await body;
                try {

                    responseObj = await jsonConvert.deserialize<T>(response, responseObject);

                } catch (err) {

                    console.error((<Error>err));
                    throw err;
                }
            }
        });

        return await responseObj as T;
    };

    public async Post<T>(endPoint: string, requestBody: any = {}, statusCode: number, responseObject?: new () => T, options: any = {}): Promise<T> {

        accessTokenResponseObject = await this.Init();
        let response = undefined;
        let responseObj = undefined;

        if (!options.headers) {
            options.headers = {};
        }

        options.headers['Authorization'] = `Bearer ${accessTokenResponseObject.access_token}`
        options.headers['Content-Type'] = 'application/json';
        options.json = true;
        options.body = requestBody;

        await request.post(uri + endPoint, options, async function (err, httpResponse, body) {

            if (httpResponse.statusCode !== statusCode) {

                console.error(`Post request failed with the following statusCode : ${httpResponse.statusCode} and statusMessage : ${httpResponse.statusMessage}`);
                throw err;

            } else {

                response = await body;
                try {

                    responseObj = await jsonConvert.deserialize<T>(response, responseObject);

                } catch (err) {

                    console.error((<Error>err));
                    throw err;
                }
            }
        });

        return await responseObj as T;
    };

    private async Init(): Promise<AccessTokenResponseObject> {

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

            accessTokenResponseObject = (<AccessTokenResponseObject>jsonConvert.deserialize(await request.post(options), AccessTokenResponseObject));
            return await accessTokenResponseObject as AccessTokenResponseObject;

        } catch (err) {

            console.error(`Error getting authorisation token.', ${err}`);
            throw err;
        }
    };
}