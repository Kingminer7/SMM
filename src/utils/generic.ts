export const getEnumKeyByValue = (enumerated: any, value: any): any => {
  return Object.keys(enumerated)[
    Object.values(enumerated).indexOf(value as typeof enumerated)
  ];
};