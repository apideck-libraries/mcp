import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateHrisCompanyResponse } from "./createhriscompanyresponse.js";
import { HrisCompanyInput } from "./hriscompany.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type HrisCompaniesAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const HrisCompaniesAddGlobals$zodSchema: z.ZodType<HrisCompaniesAddGlobals>;
export type HrisCompaniesAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: HrisCompanyInput;
};
export declare const HrisCompaniesAddRequest$zodSchema: z.ZodType<HrisCompaniesAddRequest>;
export type HrisCompaniesAddResponse = CreateHrisCompanyResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const HrisCompaniesAddResponse$zodSchema: z.ZodType<HrisCompaniesAddResponse>;
//# sourceMappingURL=hriscompaniesaddop.d.ts.map