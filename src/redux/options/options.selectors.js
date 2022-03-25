import { createSelector } from "reselect";

const selectOptions = (state) => state.options;

export const selectAvailableOptions = createSelector(
  [selectOptions],
  (options) => options.availableOptions
);
