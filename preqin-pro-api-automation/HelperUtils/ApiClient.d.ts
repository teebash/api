export declare class ApiClient {
    Get<T>(endPoint: string, statusCode: number, responseObject?: new () => T, options?: any): Promise<T>;
    Post<T>(endPoint: string, requestBody: any, statusCode: number, responseObject?: new () => T, options?: any): Promise<T>;
    private Init;
}
