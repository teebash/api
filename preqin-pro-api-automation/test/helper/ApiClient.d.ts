export default class ApiClient {
    Init(): Promise<any>;
    Get<T>(endPoint: string, statusCode: number, responseObject: new () => T, options?: any): Promise<T>;
    Post<T>(endPoint: string, statusCode: number, responseObject: new () => T, payload?: any, options?: any): Promise<T>;
}
