import { createStore, combineReducers } from "redux";
import initialState from "./initialState";
import shortid from "shortid";
import strContains from "../utils/strContains";
import listsReducer from './listsReducer';
import searchStringReducer from "./searchStringReducer";

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId === columnId && strContains(card.title, searchString)
  );
export const getAllColumns = (state) => state.columns;
export const getListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);
export const getColumnsByList = ({ columns }, listId) =>
  columns.filter((column) => column.listId === listId);
export const getAllLists = (state) => state.lists;
export const searchInputValue = (state) => state.searchString;
export const getFavouriteCard = (state) =>
  state.cards.filter((card) => card.isFavourite === true);

// action creators
export const addList = (payload) => ({ type: "ADD_LIST", payload });
export const addColumn = (payload) => ({ type: "ADD_COLUMN", payload });
export const addCard = (payload) => ({ type: "ADD_CARD", payload });
export const updateSearchString = (payload) => ({
  type: "UPDATE_SEARCHSTRING",
  payload,
});
export const toggleCardFavourite = (payload) => ({
  type: "TOGGLE_CARD_FAVOURITE",
  payload,
});

//data

const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case "ADD_COLUMN":
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case "ADD_CARD":
      return [...statePart, { ...action.payload, id: shortid() }];
    case "TOGGLE_CARD_FAVOURITE":
      return statePart.map((card) =>
        card.id === action.payload
          ? { ...card, isFavourite: !card.isFavourite }
          : card
      );
    default:
      return statePart;
  }
};

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
