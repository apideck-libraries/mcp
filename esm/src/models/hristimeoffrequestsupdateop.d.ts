import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { TimeOffRequestInput } from "./timeoffrequest.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateTimeOffRequestResponse } from "./updatetimeoffrequestresponse.js";
export type HrisTimeOffRequestsUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const HrisTimeOffRequestsUpdateGlobals$zodSchema: z.ZodType<HrisTimeOffRequestsUpdateGlobals>;
export type HrisTimeOffRequestsUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    employee_id: string;
    body: TimeOffRequestInput;
};
export declare const HrisTimeOffRequestsUpdateRequest$zodSchema: z.ZodType<HrisTimeOffRequestsUpdateRequest>;
export type HrisTimeOffRequestsUpdateResponse = UpdateTimeOffRequestResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const HrisTimeOffRequestsUpdateResponse$zodSchema: z.ZodType<HrisTimeOffRequestsUpdateResponse>;
//# sourceMappingURL=hristimeoffrequestsupdateop.d.ts.map