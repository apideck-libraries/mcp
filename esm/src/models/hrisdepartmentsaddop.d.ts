import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateDepartmentResponse } from "./createdepartmentresponse.js";
import { DepartmentInput } from "./departmentinput.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type HrisDepartmentsAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const HrisDepartmentsAddGlobals$zodSchema: z.ZodType<HrisDepartmentsAddGlobals>;
export type HrisDepartmentsAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: DepartmentInput;
};
export declare const HrisDepartmentsAddRequest$zodSchema: z.ZodType<HrisDepartmentsAddRequest>;
export type HrisDepartmentsAddResponse = CreateDepartmentResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const HrisDepartmentsAddResponse$zodSchema: z.ZodType<HrisDepartmentsAddResponse>;
//# sourceMappingURL=hrisdepartmentsaddop.d.ts.map