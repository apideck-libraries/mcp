import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteAccountingLocationResponse } from "./deleteaccountinglocationresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingLocationsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingLocationsDeleteGlobals$zodSchema: z.ZodType<AccountingLocationsDeleteGlobals>;
export type AccountingLocationsDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingLocationsDeleteRequest$zodSchema: z.ZodType<AccountingLocationsDeleteRequest>;
export type AccountingLocationsDeleteResponse = DeleteAccountingLocationResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingLocationsDeleteResponse$zodSchema: z.ZodType<AccountingLocationsDeleteResponse>;
//# sourceMappingURL=accountinglocationsdeleteop.d.ts.map