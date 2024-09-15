export class FlowError extends Error {
  constructor(message?: string, options?: FlowError.Options) {
    super(message, options != null ? { cause: options.cause } : undefined);
  }
}

export namespace FlowError {
  export interface Options {
    readonly cause: unknown;
  }
}
