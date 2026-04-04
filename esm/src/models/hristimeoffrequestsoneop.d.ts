import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetTimeOffRequestResponse } from "./gettimeoffrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type HrisTimeOffRequestsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const HrisTimeOffRequestsOneGlobals$zodSchema: z.ZodType<HrisTimeOffRequestsOneGlobals>;
export type HrisTimeOffRequestsOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
    employee_id: string;
};
export declare const HrisTimeOffRequestsOneRequest$zodSchema: z.ZodType<HrisTimeOffRequestsOneRequest>;
export type HrisTimeOffRequestsOneResponse = GetTimeOffRequestResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const HrisTimeOffRequestsOneResponse$zodSchema: z.ZodType<HrisTimeOffRequestsOneResponse>;
//# sourceMappingURL=hristimeoffrequestsoneop.d.ts.map