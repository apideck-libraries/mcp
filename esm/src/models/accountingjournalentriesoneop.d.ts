import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetJournalEntryResponse } from "./getjournalentryresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingJournalEntriesOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingJournalEntriesOneGlobals$zodSchema: z.ZodType<AccountingJournalEntriesOneGlobals>;
export type AccountingJournalEntriesOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingJournalEntriesOneRequest$zodSchema: z.ZodType<AccountingJournalEntriesOneRequest>;
export type AccountingJournalEntriesOneResponse = GetJournalEntryResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingJournalEntriesOneResponse$zodSchema: z.ZodType<AccountingJournalEntriesOneResponse>;
//# sourceMappingURL=accountingjournalentriesoneop.d.ts.map