import * as z from "zod/v4";
export declare function bigint(): z.ZodType<bigint | string>;
export declare function bigintOptional(): z.ZodType<bigint | string | undefined>;
export declare function bigintNullable(): z.ZodType<bigint | string | null>;
export declare function bigintConst<T extends bigint>(value: T): z.ZodType<T>;
//# sourceMappingURL=bigint.d.ts.map