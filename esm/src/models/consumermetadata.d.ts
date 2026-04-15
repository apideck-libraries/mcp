import * as z from "zod";
/**
 * The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended.
 */
export type ConsumerMetadata = {
    account_name?: string | undefined;
    user_name?: string | undefined;
    email?: string | undefined;
    image?: string | undefined;
};
export declare const ConsumerMetadata$zodSchema: z.ZodType<ConsumerMetadata>;
//# sourceMappingURL=consumermetadata.d.ts.map