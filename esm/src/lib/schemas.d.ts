import * as z from "zod";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { Result } from "../types/fp.js";
export declare function collectExtraKeys<Shape extends z.ZodRawShape, Catchall extends z.ZodType, K extends string, Optional extends boolean>(obj: z.ZodObject<Shape, z.core.$catchall<Catchall>>, extrasKey: K, optional: Optional): z.ZodPipe<z.ZodObject<Shape, z.core.$catchall<Catchall>>, z.ZodTransform<any, z.core.$InferObjectOutput<Shape, {
    [k: string]: z.core.output<Catchall>;
}>>>;
/**
 * Utility function that executes some code which may throw a ZodError. It
 * intercepts this error and converts it to an SDKValidationError so as to not
 * leak Zod implementation details to user code.
 */
export declare function parse<Inp, Out>(rawValue: Inp, fn: (value: Inp) => Out, errorMessage: string): Out;
/**
 * Utility function that executes some code which may result in a ZodError. It
 * intercepts this error and converts it to an SDKValidationError so as to not
 * leak Zod implementation details to user code.
 */
export declare function safeParse<Inp, Out>(rawValue: Inp, fn: (value: Inp) => Out, errorMessage: string): Result<Out, SDKValidationError>;
//# sourceMappingURL=schemas.d.ts.map