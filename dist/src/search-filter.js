// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Apideck
/**
 * Case-insensitive AND-across-terms substring match against
 * `tool.name` + `tool.description`. Empty terms returns `true`.
 *
 * Shared by `meta.ts` (`list_tools` filter) and `code-tools/search.ts`
 * (`apideck_search` filter).
 */
export const matchesSearchTerms = (tool, terms) => {
    const haystack = `${tool.name} ${tool.description ?? ''}`.toLowerCase();
    return terms.every((term) => haystack.includes(term.toLowerCase()));
};
/**
 * Convert kebab-case to camelCase.
 *   "accounting-invoices-list" → "accountingInvoicesList"
 *   "crm-contacts-add"         → "crmContactsAdd"
 *
 * Shared by `code-tools/search.ts` (output mapping) and
 * `code-tools/run.ts` (apideck.<methodName> proxy keys).
 */
export const kebabToCamel = (name) => {
    const parts = name.split('-');
    if (parts.length === 0)
        return name;
    const [head, ...rest] = parts;
    return ((head ?? '').toLowerCase() +
        rest
            .map((p) => (p.length === 0 ? '' : p[0].toUpperCase() + p.slice(1)))
            .join(''));
};
//# sourceMappingURL=search-filter.js.map