//createSelector memoizes Selectors (as long as inputs do not change, outputs remain same)
//vid #161
import { createSelector } from 'reselect';

//retrieve only category slice from Redux
const selectCategoryReducer = (state) => state.categories;

//First arg createSelector is arr of input selectors
//if input selectors have not changed, second output selector argument will not run/re-render component
//Second is the output selector (tuple of args corresponding to each consecutive input selector)
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
  //As long as categories array does not change
  //below method does not run
    categories.reduce(
      (acc, category) => {
      const { title, items } = category;

      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);


  //Note
  //.reduce() will always return a new object thus causing the useSelector hook
  //to rerender the component it is used within every time it is run
  //since it will not cache previous state/values