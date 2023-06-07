type MaxFieldLengthType = (value: string, limit: number) => boolean;
export const maxLength: MaxFieldLengthType = (value, limit)=>  value.length < limit;

type FieldRequiredType = (value: string| null) => boolean
export const required: FieldRequiredType = (value) => Boolean(value);

