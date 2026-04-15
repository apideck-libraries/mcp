import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteEmployeeResponse } from "./deleteemployeeresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type HrisEmployeesDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const HrisEmployeesDeleteGlobals$zodSchema: z.ZodType<HrisEmployeesDeleteGlobals>;
export type HrisEmployeesDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const HrisEmployeesDeleteRequest$zodSchema: z.ZodType<HrisEmployeesDeleteRequest>;
export type HrisEmployeesDeleteResponse = DeleteEmployeeResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const HrisEmployeesDeleteResponse$zodSchema: z.ZodType<HrisEmployeesDeleteResponse>;
//# sourceMappingURL=hrisemployeesdeleteop.d.ts.map