export const getEnumKeyByValue = (enumerated, value) => {
    return Object.keys(enumerated)[Object.values(enumerated).indexOf(value)];
};
