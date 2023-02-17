export const maxLength = (value, limit) => {
    return value.length < limit;
}

export const required = (value) => {
    return Boolean(value);
}

