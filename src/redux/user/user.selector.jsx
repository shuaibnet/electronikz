import { createSelector } from "reselect";

const selectUser = state=> state.user;

export const selectrCurrentUser = createSelector (
    [selectUser],
    user => user.currentUser
);