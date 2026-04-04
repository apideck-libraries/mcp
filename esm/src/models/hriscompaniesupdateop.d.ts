import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { HrisCompanyInput } from "./hriscompany.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateHrisCompanyResponse } from "./updatehriscompanyresponse.js";
export type HrisCompaniesUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const HrisCompaniesUpdateGlobals$zodSchema: z.ZodType<HrisCompaniesUpdateGlobals>;
export type HrisCompaniesUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: HrisCompanyInput;
};
export declare const HrisCompaniesUpdateRequest$zodSchema: z.ZodType<HrisCompaniesUpdateRequest>;
export type HrisCompaniesUpdateResponse = UpdateHrisCompanyResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const HrisCompaniesUpdateResponse$zodSchema: z.ZodType<HrisCompaniesUpdateResponse>;
//# sourceMappingURL=hriscompaniesupdateop.d.ts.map