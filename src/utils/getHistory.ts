export const getHistory = () =>
  JSON.parse(localStorage.getItem("history") ?? "[]");
