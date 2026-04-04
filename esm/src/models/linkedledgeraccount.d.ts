import * as z from "zod";
export type LinkedLedgerAccount = {
    id?: string | undefined;
    name?: string | null | undefined;
    nominal_code?: string | null | undefined;
    code?: string | null | undefined;
    parent_id?: string | null | undefined;
    display_id?: string | null | undefined;
};
export declare const LinkedLedgerAccount$zodSchema: z.ZodType<LinkedLedgerAccount>;
//# sourceMappingURL=linkedledgeraccount.d.ts.map