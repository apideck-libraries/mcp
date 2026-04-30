import { AsyncLocalStorage } from 'node:async_hooks';
import type { CallContext } from './types.js';
export declare const contextStorage: AsyncLocalStorage<CallContext>;
import type { ToolDefinition } from './types.js';
export declare const tools: ReadonlyArray<ToolDefinition>;
//# sourceMappingURL=tools.d.ts.map