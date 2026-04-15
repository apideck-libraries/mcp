import { ConsoleLogger } from "./console-logger.js";
export interface AnalyticsEvent {
    distinctId: string;
    event: string;
    properties?: Record<string, unknown>;
}
export interface Analytics {
    capture(event: AnalyticsEvent): Promise<void>;
    flush(): Promise<void>;
}
export declare function createAnalytics(apiKey: string | undefined, logger: ConsoleLogger, onBackground?: (promise: Promise<unknown>) => void): Analytics;
//# sourceMappingURL=analytics.d.ts.map