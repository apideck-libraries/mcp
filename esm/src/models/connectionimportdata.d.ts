import * as z from "zod";
export type Credentials = {
    refresh_token?: string | null | undefined;
    access_token?: string | undefined;
    issued_at?: string | null | undefined;
    expires_in?: number | null | undefined;
};
export declare const Credentials$zodSchema: z.ZodType<Credentials>;
export type ConnectionImportData = {
    credentials?: Credentials | undefined;
    settings?: {
        [k: string]: any;
    } | null | undefined;
    metadata?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const ConnectionImportData$zodSchema: z.ZodType<ConnectionImportData>;
//# sourceMappingURL=connectionimportdata.d.ts.map