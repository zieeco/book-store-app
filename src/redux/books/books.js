const initialState = [];
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOK = 'bookStore/books/GET_BOOK';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JE0tzLlkZCHYnlT68Nzl/books/';

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const getBook = (totalBooks) => ({
  type: GET_BOOK,
  payload: totalBooks,
});

export const getBookAsync = () => (
  async (dispatch) => {
    const response = await fetch(BASE_URL);
    const result = await response.json();
    dispatch(getBook(result));
  }
);

export const addNewBookAsync = (newBook) => (
  async (dispatch) => {
    await fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(newBook),
      headers: { 'Content-type': 'application/json' },
    });
    dispatch(addBook(newBook));
  }
);

export const removeBookAsync = (id) => (
  async (dispatch) => {
    await fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      body: JSON.stringify({ item_id: id }),
      headers: { 'Content-type': 'application/json' },
    });
    dispatch(removeBook(id));
  }
);

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.id);
    case GET_BOOK:
      return Object.entries(action.payload).map(([key, value]) => {
        const [book] = value;
        return {
          item_id: key,
          ...book,
        };
      });
    default:
      return state;
  }
};

export default booksReducer;
