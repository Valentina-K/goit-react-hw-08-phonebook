import { createSelector } from "@reduxjs/toolkit";
import {selectFilter} from '../filter/selectors';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectContactsList = createSelector(
    [selectContacts,selectFilter],(items, value) => {
  if (value === '') return items;
  return items.filter(item =>
    item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );
});