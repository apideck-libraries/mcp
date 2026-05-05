// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Apideck
/**
 * Workflow registry. One entry per shipped workflow. Symmetric with
 * `tools.ts` exporting `tools` — `server.ts` imports `workflows` once.
 */
import { tools as allTools } from '../tools.js';
import { createMonthEndCloseCheck } from './month-end-close.js';
import { createOnboardEmployee } from './onboard-employee.js';
import { createPayBill } from './pay-bill.js';
import { createReceiveCustomerPayment } from './receive-customer-payment.js';
export const workflows = [
    createMonthEndCloseCheck(allTools),
    createPayBill(allTools),
    createReceiveCustomerPayment(allTools),
    createOnboardEmployee(allTools),
];
//# sourceMappingURL=index.js.map