import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetJournalEntriesResponse } from "./getjournalentriesresponse.js";
import { JournalEntriesFilter } from "./journalentriesfilter.js";
import { JournalEntriesSort } from "./journalentriessort.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingJournalEntriesAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingJournalEntriesAllGlobals$zodSchema: z.ZodType<AccountingJournalEntriesAllGlobals>;
export type AccountingJournalEntriesAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: JournalEntriesFilter | undefined;
    sort?: JournalEntriesSort | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingJournalEntriesAllRequest$zodSchema: z.ZodType<AccountingJournalEntriesAllRequest>;
export type AccountingJournalEntriesAllResponseResult = GetJournalEntriesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingJournalEntriesAllResponseResult$zodSchema: z.ZodType<AccountingJournalEntriesAllResponseResult>;
export type AccountingJournalEntriesAllResponse = {
    Result: GetJournalEntriesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingJournalEntriesAllResponse$zodSchema: z.ZodType<AccountingJournalEntriesAllResponse>;
//# sourceMappingURL=accountingjournalentriesallop.d.ts.map