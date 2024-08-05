export const getFavoritesList = (): number[] => {
  return JSON.parse(localStorage.getItem("favorites") ?? "[]");
};

export const addToFavorites = (id: number) => {
  const favoritesList = getFavoritesList();
  if (!favoritesList.includes(id)) {
    favoritesList.push(id);
  }
  localStorage.setItem("favorites", JSON.stringify(favoritesList));
};

export const removeFromFavorites = (id: number) => {
  let favoritesList = getFavoritesList();
  favoritesList = favoritesList.filter((favoriteId) => favoriteId !== id);
  localStorage.setItem("favorites", JSON.stringify(favoritesList));
};
