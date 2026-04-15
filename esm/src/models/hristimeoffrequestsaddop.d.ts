import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateTimeOffRequestResponse } from "./createtimeoffrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { TimeOffRequestInput } from "./timeoffrequest.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type HrisTimeOffRequestsAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const HrisTimeOffRequestsAddGlobals$zodSchema: z.ZodType<HrisTimeOffRequestsAddGlobals>;
export type HrisTimeOffRequestsAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: TimeOffRequestInput;
};
export declare const HrisTimeOffRequestsAddRequest$zodSchema: z.ZodType<HrisTimeOffRequestsAddRequest>;
export type HrisTimeOffRequestsAddResponse = CreateTimeOffRequestResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const HrisTimeOffRequestsAddResponse$zodSchema: z.ZodType<HrisTimeOffRequestsAddResponse>;
//# sourceMappingURL=hristimeoffrequestsaddop.d.ts.map