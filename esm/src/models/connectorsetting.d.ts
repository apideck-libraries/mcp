import * as z from "zod";
import { ClosedEnum } from "../types/enums.js";
export declare const ConnectorSettingType: {
    readonly Text: "text";
    readonly Checkbox: "checkbox";
    readonly Tel: "tel";
    readonly Email: "email";
    readonly Url: "url";
    readonly Textarea: "textarea";
    readonly Select: "select";
    readonly FilteredSelect: "filtered-select";
    readonly MultiSelect: "multi-select";
    readonly Datetime: "datetime";
    readonly Date: "date";
    readonly Time: "time";
    readonly Number: "number";
    readonly Password: "password";
};
export type ConnectorSettingType = ClosedEnum<typeof ConnectorSettingType>;
export declare const ConnectorSettingType$zodSchema: z.ZodEnum<{
    number: "number";
    email: "email";
    url: "url";
    date: "date";
    password: "password";
    time: "time";
    text: "text";
    datetime: "datetime";
    checkbox: "checkbox";
    tel: "tel";
    textarea: "textarea";
    select: "select";
    "filtered-select": "filtered-select";
    "multi-select": "multi-select";
}>;
export type ConnectorSetting = {
    id?: string | undefined;
    label?: string | undefined;
    type?: ConnectorSettingType | undefined;
};
export declare const ConnectorSetting$zodSchema: z.ZodType<ConnectorSetting>;
//# sourceMappingURL=connectorsetting.d.ts.map