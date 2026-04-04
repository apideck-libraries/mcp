import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteTimeOffRequestResponse } from "./deletetimeoffrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type HrisTimeOffRequestsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const HrisTimeOffRequestsDeleteGlobals$zodSchema: z.ZodType<HrisTimeOffRequestsDeleteGlobals>;
export type HrisTimeOffRequestsDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    employee_id: string;
};
export declare const HrisTimeOffRequestsDeleteRequest$zodSchema: z.ZodType<HrisTimeOffRequestsDeleteRequest>;
export type HrisTimeOffRequestsDeleteResponse = DeleteTimeOffRequestResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const HrisTimeOffRequestsDeleteResponse$zodSchema: z.ZodType<HrisTimeOffRequestsDeleteResponse>;
//# sourceMappingURL=hristimeoffrequestsdeleteop.d.ts.map