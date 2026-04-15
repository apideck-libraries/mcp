import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteDepartmentResponse } from "./deletedepartmentresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type HrisDepartmentsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const HrisDepartmentsDeleteGlobals$zodSchema: z.ZodType<HrisDepartmentsDeleteGlobals>;
export type HrisDepartmentsDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const HrisDepartmentsDeleteRequest$zodSchema: z.ZodType<HrisDepartmentsDeleteRequest>;
export type HrisDepartmentsDeleteResponse = DeleteDepartmentResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const HrisDepartmentsDeleteResponse$zodSchema: z.ZodType<HrisDepartmentsDeleteResponse>;
//# sourceMappingURL=hrisdepartmentsdeleteop.d.ts.map