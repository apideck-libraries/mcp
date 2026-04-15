import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * The type of profit and loss
 */
export declare const ProfitAndLossType: {
    readonly Section: "Section";
    readonly Record: "Record";
};
/**
 * The type of profit and loss
 */
export type ProfitAndLossType = OpenEnum<typeof ProfitAndLossType>;
export declare const ProfitAndLossType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    Section: "Section";
    Record: "Record";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=profitandlosstype.d.ts.map