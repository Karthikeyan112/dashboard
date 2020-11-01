export const filterOptions = (arr, prop) => {
  return Array.from(new Set(arr.reduce((acc, item) => [...acc, item[prop]], []))).map(item => ({ text: item, value: item }));
}
