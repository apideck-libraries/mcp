import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Currency } from "./currency.js";
import { PassThroughBody } from "./passthroughbody.js";
/**
 * Set to sms for SMS messages and mms for MMS messages.
 */
export declare const MessageType: {
    readonly Sms: "sms";
    readonly Mms: "mms";
};
/**
 * Set to sms for SMS messages and mms for MMS messages.
 */
export type MessageType = OpenEnum<typeof MessageType>;
export declare const MessageType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    sms: "sms";
    mms: "mms";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * The direction of the message.
 */
export declare const Direction: {
    readonly Inbound: "inbound";
    readonly OutboundApi: "outbound-api";
    readonly OutboundCall: "outbound-call";
    readonly OutboundReply: "outbound-reply";
    readonly Unknown: "unknown";
};
/**
 * The direction of the message.
 */
export type Direction = OpenEnum<typeof Direction>;
export declare const Direction$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    unknown: "unknown";
    inbound: "inbound";
    "outbound-api": "outbound-api";
    "outbound-call": "outbound-call";
    "outbound-reply": "outbound-reply";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * Status of the delivery of the message.
 */
export declare const MessageStatus: {
    readonly Accepted: "accepted";
    readonly Scheduled: "scheduled";
    readonly Canceled: "canceled";
    readonly Queued: "queued";
    readonly Sending: "sending";
    readonly Sent: "sent";
    readonly Failed: "failed";
    readonly Delivered: "delivered";
    readonly Undelivered: "undelivered";
    readonly Receiving: "receiving";
    readonly Received: "received";
    readonly Read: "read";
};
/**
 * Status of the delivery of the message.
 */
export type MessageStatus = OpenEnum<typeof MessageStatus>;
export declare const MessageStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    read: "read";
    failed: "failed";
    received: "received";
    sent: "sent";
    accepted: "accepted";
    delivered: "delivered";
    scheduled: "scheduled";
    canceled: "canceled";
    queued: "queued";
    sending: "sending";
    undelivered: "undelivered";
    receiving: "receiving";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * Price of the message.
 */
export type Price = {
    per_unit?: string | undefined;
    total_amount?: string | undefined;
    currency?: Currency | null | undefined;
};
export declare const Price$zodSchema: z.ZodType<Price>;
/**
 * The error returned if your message status is failed or undelivered.
 */
export type ErrorT = {
    code?: string | undefined;
    message?: string | undefined;
};
export declare const ErrorT$zodSchema: z.ZodType<ErrorT>;
export type Message = {
    id?: string | undefined;
    from: string;
    to: string;
    subject?: string | undefined;
    body: string;
    type?: MessageType | undefined;
    number_of_units?: number | undefined;
    number_of_media_files?: number | undefined;
    direction?: Direction | undefined;
    status?: MessageStatus | undefined;
    scheduled_at?: string | undefined;
    sent_at?: string | undefined;
    webhook_url?: string | undefined;
    reference?: string | undefined;
    price?: Price | undefined;
    error?: ErrorT | undefined;
    messaging_service_id?: string | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const Message$zodSchema: z.ZodType<Message>;
export type MessageInput = {
    from: string;
    to: string;
    subject?: string | undefined;
    body: string;
    type?: MessageType | undefined;
    scheduled_at?: string | undefined;
    webhook_url?: string | undefined;
    reference?: string | undefined;
    messaging_service_id?: string | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const MessageInput$zodSchema: z.ZodType<MessageInput>;
//# sourceMappingURL=message.d.ts.map