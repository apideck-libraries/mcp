import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DepartmentInput } from "./departmentinput.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateDepartmentResponse } from "./updatedepartmentresponse.js";
export type HrisDepartmentsUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const HrisDepartmentsUpdateGlobals$zodSchema: z.ZodType<HrisDepartmentsUpdateGlobals>;
export type HrisDepartmentsUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: DepartmentInput;
};
export declare const HrisDepartmentsUpdateRequest$zodSchema: z.ZodType<HrisDepartmentsUpdateRequest>;
export type HrisDepartmentsUpdateResponse = UpdateDepartmentResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const HrisDepartmentsUpdateResponse$zodSchema: z.ZodType<HrisDepartmentsUpdateResponse>;
//# sourceMappingURL=hrisdepartmentsupdateop.d.ts.map