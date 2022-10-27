import { createStore, combineReducers } from "redux";
import initialState from "./initialState";
import listsReducer from './listsReducer';
import columnsReducer from "./columnsReducer";
import cardsReducer from "./cardsReducer";
import searchStringReducer from "./searchStringReducer";

//selectors
export const getAllColumns = (state) => state.columns;
export const getColumnsByList = ({ columns }, listId) =>
  columns.filter((column) => column.listId === listId);
export const searchInputValue = (state) => state.searchString;

// action creators
export const addColumn = (payload) => ({ type: "ADD_COLUMN", payload });
export const updateSearchString = (payload) => ({
  type: "UPDATE_SEARCHSTRING",
  payload,
});

//data

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
