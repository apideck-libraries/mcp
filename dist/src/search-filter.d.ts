import type { ToolDefinition } from './types.js';
/**
 * Case-insensitive AND-across-terms substring match against
 * `tool.name` + `tool.description`. Empty terms returns `true`.
 *
 * Shared by `meta.ts` (`list_tools` filter) and `code-tools/search.ts`
 * (`apideck_search` filter).
 */
export declare const matchesSearchTerms: (tool: ToolDefinition, terms: string[]) => boolean;
/**
 * Convert kebab-case to camelCase.
 *   "accounting-invoices-list" → "accountingInvoicesList"
 *   "crm-contacts-add"         → "crmContactsAdd"
 *
 * Shared by `code-tools/search.ts` (output mapping) and
 * `code-tools/run.ts` (apideck.<methodName> proxy keys).
 */
export declare const kebabToCamel: (name: string) => string;
//# sourceMappingURL=search-filter.d.ts.map