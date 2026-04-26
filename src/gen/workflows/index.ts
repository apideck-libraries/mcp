/**
 * Phase 3 workflow tools — intent-grouped composites over generated
 * endpoint tools. Each orchestrates 2-5 generated tools behind a single
 * MCP tool with a high-level Zod schema.
 *
 * Per the "building agents that reach production systems with MCP"
 * guidance: "A single create_issue_from_thread tool beats
 * get_thread + parse_messages + create_issue + link_attachment."
 */

import { apideckMonthEndCloseCheck } from "./monthEndClose.js";
import { apideckPayBill } from "./payBill.js";
import { apideckReceiveCustomerPayment } from "./receivePayment.js";
import type { WorkflowTool } from "./helpers.js";

export const workflowTools: WorkflowTool[] = [
  apideckMonthEndCloseCheck,
  apideckPayBill,
  apideckReceiveCustomerPayment,
];
