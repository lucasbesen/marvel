export const handleWithDescription = (description: string) => {
  if (description.length >= 100) {
    return `${description.substring(0, 100)}...`;
  }
  return description;
};

export const getByLocalStorage = (id: string, defaultValue: string, fieldName: string): string => {
  const value: string = localStorage.getItem(`${id}-${fieldName}`);
  if (value) {
    return value;
  }
  return defaultValue;
};
