export default class ApiClient {
    Init(): Promise<any>;
    Get(endPoint: string, options?: any): Promise<any>;
    Post(endPoint: string, payload?: any, options?: any): Promise<any>;
}
