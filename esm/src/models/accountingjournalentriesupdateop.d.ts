import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { JournalEntryInput } from "./journalentry.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateJournalEntryResponse } from "./updatejournalentryresponse.js";
export type AccountingJournalEntriesUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingJournalEntriesUpdateGlobals$zodSchema: z.ZodType<AccountingJournalEntriesUpdateGlobals>;
export type AccountingJournalEntriesUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    body: JournalEntryInput;
};
export declare const AccountingJournalEntriesUpdateRequest$zodSchema: z.ZodType<AccountingJournalEntriesUpdateRequest>;
export type AccountingJournalEntriesUpdateResponse = UpdateJournalEntryResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingJournalEntriesUpdateResponse$zodSchema: z.ZodType<AccountingJournalEntriesUpdateResponse>;
//# sourceMappingURL=accountingjournalentriesupdateop.d.ts.map