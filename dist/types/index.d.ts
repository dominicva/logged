export declare const info: import("./utils/genLogger").Logger;
export declare const success: import("./utils/genLogger").Logger;
export declare const warn: import("./utils/genLogger").Logger;
export declare const error: import("./utils/genLogger").Logger;
export declare const log: {
    (...data: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
};
