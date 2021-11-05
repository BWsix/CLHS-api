export const ok = <T>(data: T) => ({ data, error: {} });
export const err = <T>(error: string) => ({ data: {} as T, error });
