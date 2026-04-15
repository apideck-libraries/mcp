import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetHrisCompanyResponse } from "./gethriscompanyresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type HrisCompaniesOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const HrisCompaniesOneGlobals$zodSchema: z.ZodType<HrisCompaniesOneGlobals>;
export type HrisCompaniesOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const HrisCompaniesOneRequest$zodSchema: z.ZodType<HrisCompaniesOneRequest>;
export type HrisCompaniesOneResponse = GetHrisCompanyResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const HrisCompaniesOneResponse$zodSchema: z.ZodType<HrisCompaniesOneResponse>;
//# sourceMappingURL=hriscompaniesoneop.d.ts.map