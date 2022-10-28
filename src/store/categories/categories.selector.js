import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategoriesMap = (state) => {
  console.log("seletor fired");
  return state.categories.categories.reduce((acc, { title, items }) => {
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
};
