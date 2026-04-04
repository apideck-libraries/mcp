import * as z from "zod";
import { AccountingLocationInput } from "./accountinglocation.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateAccountingLocationResponse } from "./updateaccountinglocationresponse.js";
export type AccountingLocationsUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingLocationsUpdateGlobals$zodSchema: z.ZodType<AccountingLocationsUpdateGlobals>;
export type AccountingLocationsUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    body: AccountingLocationInput;
};
export declare const AccountingLocationsUpdateRequest$zodSchema: z.ZodType<AccountingLocationsUpdateRequest>;
export type AccountingLocationsUpdateResponse = UpdateAccountingLocationResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingLocationsUpdateResponse$zodSchema: z.ZodType<AccountingLocationsUpdateResponse>;
//# sourceMappingURL=accountinglocationsupdateop.d.ts.map