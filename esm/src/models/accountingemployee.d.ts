import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Address } from "./address.js";
import { BankAccount } from "./bankaccount.js";
import { Currency } from "./currency.js";
import { CustomFieldUnion } from "./customfieldunion.js";
import { Email } from "./email.js";
import { Gender } from "./gender.js";
import { LinkedDepartment } from "./linkeddepartment.js";
import { LinkedDepartmentInput } from "./linkeddepartmentinput.js";
import { LinkedLocation } from "./linkedlocation.js";
import { LinkedLocationInput } from "./linkedlocationinput.js";
import { LinkedSubsidiary } from "./linkedsubsidiary.js";
import { LinkedSubsidiaryInput } from "./linkedsubsidiaryinput.js";
import { LinkedTrackingCategory } from "./linkedtrackingcategory.js";
import { PassThroughBody } from "./passthroughbody.js";
import { PhoneNumber } from "./phonenumber.js";
/**
 * The status of the employee.
 */
export declare const EmployeeStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
    readonly Terminated: "terminated";
};
/**
 * The status of the employee.
 */
export type EmployeeStatus = OpenEnum<typeof EmployeeStatus>;
export declare const EmployeeStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    active: "active";
    inactive: "inactive";
    terminated: "terminated";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * The manager of the employee.
 */
export type AccountingEmployeeManager = {
    id?: string | undefined;
    name?: string | null | undefined;
};
export declare const AccountingEmployeeManager$zodSchema: z.ZodType<AccountingEmployeeManager>;
export type AccountingEmployee = {
    id?: string | undefined;
    downstream_id?: string | null | undefined;
    display_id?: string | null | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    display_name?: string | null | undefined;
    emails?: Array<Email> | undefined;
    employee_number?: string | null | undefined;
    job_title?: string | null | undefined;
    status?: EmployeeStatus | null | undefined;
    is_contractor?: boolean | null | undefined;
    department?: LinkedDepartment | null | undefined;
    location?: LinkedLocation | null | undefined;
    manager?: AccountingEmployeeManager | undefined;
    hire_date?: string | null | undefined;
    termination_date?: string | null | undefined;
    gender?: Gender | null | undefined;
    birth_date?: string | null | undefined;
    subsidiary?: LinkedSubsidiary | null | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
    currency?: Currency | null | undefined;
    notes?: string | null | undefined;
    addresses?: Array<Address> | undefined;
    phone_numbers?: Array<PhoneNumber> | undefined;
    bank_account?: BankAccount | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    row_version?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const AccountingEmployee$zodSchema: z.ZodType<AccountingEmployee>;
export type AccountingEmployeeInput = {
    display_id?: string | null | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    display_name?: string | null | undefined;
    emails?: Array<Email> | undefined;
    employee_number?: string | null | undefined;
    job_title?: string | null | undefined;
    status?: EmployeeStatus | null | undefined;
    is_contractor?: boolean | null | undefined;
    department?: LinkedDepartmentInput | null | undefined;
    location?: LinkedLocationInput | null | undefined;
    manager?: AccountingEmployeeManager | undefined;
    hire_date?: string | null | undefined;
    termination_date?: string | null | undefined;
    gender?: Gender | null | undefined;
    birth_date?: string | null | undefined;
    subsidiary?: LinkedSubsidiaryInput | null | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
    currency?: Currency | null | undefined;
    notes?: string | null | undefined;
    addresses?: Array<Address> | undefined;
    phone_numbers?: Array<PhoneNumber> | undefined;
    bank_account?: BankAccount | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    row_version?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const AccountingEmployeeInput$zodSchema: z.ZodType<AccountingEmployeeInput>;
//# sourceMappingURL=accountingemployee.d.ts.map