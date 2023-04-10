export const RollbarLogLevels = Object.freeze({
  critical: "critical" as const,
  debug: "debug" as const,
  error: "error" as const,
  info: "info" as const,
  log: "log" as const,
  warning: "warning" as const,
});

export type RollbarLogLevel = keyof typeof RollbarLogLevels;
