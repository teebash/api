import request from 'request-promise-native';
import { JsonConvert } from 'json2typescript';
import { AccessToken } from '../ResponseObject/Token/tokenResponseObject';

let jsonConvert = new JsonConvert();
let accessToken = new AccessToken();
let uri = "https://magenta.dev.pro.preqin.com/";

export default class ApiClient {

    public async Init():Promise<any> {

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

        try{

            accessToken = (<any>jsonConvert).deserialize(await request.post(options), AccessToken);
            
        } catch(err){

            console.error(`Error getting authorisation token.', ${err}`);
            throw err;
        }
    };

    public async Get(endPoint: string, options:any = {}): Promise<any>{

        let response;
        if(!options.headers){
            options.headers = {};
        }

        options.headers['Authorization'] = `Bearer ${accessToken.access_token}`
        options.headers['Content-Type'] = 'application/json';
        options.json = true;

        response = await request.get(uri + endPoint, options);
        return response;
    };

    public async Post(endPoint: string, payload:any = {}, options:any = {}): Promise<any>{

        let response;
        if(!options.headers){
            options.headers = {};
        }

        options.headers['Authorization'] = `Bearer ${accessToken.access_token}`
        options.headers['Content-Type'] = 'application/json';
        options.json = true;
        options.body = payload;

        response = await request.post(uri + endPoint, options);
        return response;
    };
}