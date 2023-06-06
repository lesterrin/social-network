export const maxLength = (value: string, limit: number): boolean =>  value.length < limit;

export const required = (value: string | null | number): boolean => Boolean(value);

