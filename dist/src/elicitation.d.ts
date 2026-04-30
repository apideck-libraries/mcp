import { UrlElicitationRequiredError } from '@modelcontextprotocol/sdk/types.js';
import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import type { SecurityResolver } from './types.js';
export declare const VAULT_SESSIONS_ENDPOINT = "https://unify.apideck.com/vault/sessions";
export declare const CONNECTION_ISSUE_MARKERS: readonly string[];
export interface ConnectionIssue {
    marker: string;
    userMessage: string;
}
export interface VaultSessionContext {
    apiKey: SecurityResolver;
    appId: string;
    consumerId: string;
    signal?: AbortSignal;
}
export declare const detectConnectionIssue: (status: number, body: unknown) => ConnectionIssue | null;
export declare const mintVaultSessionUrl: (ctx: VaultSessionContext) => Promise<string | null>;
export declare const buildConnectionElicitation: (issue: ConnectionIssue, sessionUrl: string) => UrlElicitationRequiredError;
export declare const connectionIssueFallback: (issue: ConnectionIssue) => CallToolResult;
//# sourceMappingURL=elicitation.d.ts.map