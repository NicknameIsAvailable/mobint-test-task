export const isFirstEnter = (): boolean => {
  const value = localStorage.getItem("isFirstEnter");
  return value === "true";
};

export const setIsFirstEnter = (isFirstEnter: boolean): void => {
  localStorage.setItem("isFirstEnter", String(isFirstEnter));
};
