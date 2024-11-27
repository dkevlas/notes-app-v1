export interface ResponseData {
    success?: boolean,
    origin?: 'server' | 'client',
    message?: string,
    success_message?: string,
    field?: string,
    errors?: any,
    error_type?: 'request' | 'response' | 'unknown' | 'token_error',
    error_message?: string,
    token?: string
};