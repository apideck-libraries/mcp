import * as z from "zod";
export type CreateSessionResponseData = {
    session_uri: string;
    session_token: string;
};
export declare const CreateSessionResponseData$zodSchema: z.ZodType<CreateSessionResponseData>;
/**
 * Session created
 */
export type CreateSessionResponse = {
    status_code: number;
    status: string;
    data: CreateSessionResponseData;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const CreateSessionResponse$zodSchema: z.ZodType<CreateSessionResponse>;
//# sourceMappingURL=createsessionresponse.d.ts.map