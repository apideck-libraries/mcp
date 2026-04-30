// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Apideck
/**
 * `apideck_search` code-tool. Filters a tool array by `query` (substring,
 * case-insensitive, AND-across-terms) and returns `{ count, endpoints }`
 * with kebab→camelCase method names. Shares the filter implementation
 * with `meta.ts` (`list_tools`) via `../search-filter.js`.
 */
import { z } from 'zod';
import { kebabToCamel, matchesSearchTerms } from '../search-filter.js';
const inputSchema = z.object({
    query: z.string(),
});
/**
 * Build the `apideck_search` tool definition. Factory takes the endpoint
 * tool array (typically `tools` from `tools.ts`) so tests can inject a
 * small fixture without module-level mocking.
 *
 * Note: `apideck_search`'s result set is unaffected by any server-level
 * `allowedTools` configuration — it always operates on the full array
 * passed to the factory. Code mode is opinionated this way by design.
 */
export const createApideckSearch = (endpointTools) => ({
    name: 'apideck_search',
    title: 'Apideck Search',
    description: 'Search Apideck endpoint tools by substring. Returns name + camelCase method for use with apideck_run.',
    domain: 'code-tools',
    scope: 'read',
    inputSchema,
    handler: (args) => {
        const query = typeof args.query === 'string' ? args.query : '';
        const terms = query.split(/\s+/).filter((t) => t.length > 0);
        const matched = endpointTools.filter((t) => matchesSearchTerms(t, terms));
        const endpoints = matched.map((t) => ({
            name: t.name,
            method: kebabToCamel(t.name),
        }));
        return {
            content: [
                {
                    type: 'text',
                    text: JSON.stringify({ count: endpoints.length, endpoints }),
                },
            ],
        };
    },
});
//# sourceMappingURL=search.js.map