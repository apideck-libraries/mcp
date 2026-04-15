import * as z from "zod";
/**
 * Represents a company/tenant/organization accessible through the current connection. Used for multi-company connectors where a single OAuth connection provides access to multiple companies.
 */
export type AccountingConnectionCompany = {
    id: string;
    name: string;
};
export declare const AccountingConnectionCompany$zodSchema: z.ZodType<AccountingConnectionCompany>;
//# sourceMappingURL=accountingconnectioncompany.d.ts.map