export declare const responseSuccess: (metaData?: any, message?: string, code?: number) => {
    status: string;
    code: number;
    message: string;
    metaData: any;
    doc: string;
};
export declare const responseError: (message?: string, code?: number, stack?: any) => {
    status: string;
    code: number;
    message: string;
    stack: any;
};
