import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { PassThroughBody } from "./passthroughbody.js";
import { SharedLinkTarget } from "./sharedlinktarget.js";
/**
 * The scope of the shared link.
 */
export declare const Scope: {
    readonly Public: "public";
    readonly Company: "company";
};
/**
 * The scope of the shared link.
 */
export type Scope = OpenEnum<typeof Scope>;
export declare const Scope$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    public: "public";
    company: "company";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type SharedLinkOutput = {
    url?: string | null | undefined;
    download_url?: string | null | undefined;
    target?: SharedLinkTarget | undefined;
    scope?: Scope | null | undefined;
    password_protected?: boolean | null | undefined;
    expires_at?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const SharedLinkOutput$zodSchema: z.ZodType<SharedLinkOutput>;
export type SharedLinkInput = {
    download_url?: string | null | undefined;
    target_id: string | null;
    scope?: Scope | null | undefined;
    password?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const SharedLinkInput$zodSchema: z.ZodType<SharedLinkInput>;
//# sourceMappingURL=sharedlinkoutput.d.ts.map