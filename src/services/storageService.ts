export function getDataFromLocalStorage(key: string) {
  const value: string | null = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

export function setDataToLocalStorage(key: string, value: string) {
    localStorage.setItem(key, JSON.stringify(value));
}
