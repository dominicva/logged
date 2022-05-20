export interface Logger {
    (...data: any[]): void;
}
export declare const genLogger: (variant: string) => Logger;
