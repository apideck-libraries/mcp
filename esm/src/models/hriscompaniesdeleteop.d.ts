import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteHrisCompanyResponse } from "./deletehriscompanyresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type HrisCompaniesDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const HrisCompaniesDeleteGlobals$zodSchema: z.ZodType<HrisCompaniesDeleteGlobals>;
export type HrisCompaniesDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const HrisCompaniesDeleteRequest$zodSchema: z.ZodType<HrisCompaniesDeleteRequest>;
export type HrisCompaniesDeleteResponse = DeleteHrisCompanyResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const HrisCompaniesDeleteResponse$zodSchema: z.ZodType<HrisCompaniesDeleteResponse>;
//# sourceMappingURL=hriscompaniesdeleteop.d.ts.map