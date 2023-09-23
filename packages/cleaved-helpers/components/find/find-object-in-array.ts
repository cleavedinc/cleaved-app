export const findObjectInArray = <T>(value: string, array: Array<T & { value: string }>): T | undefined => {
  const object = array.find((option) => option.value === value);

  return object;
};
