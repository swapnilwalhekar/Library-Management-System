import booklist from "../../data/booklist.json";

const initial_State = {
  currentUser: {},
  cart: [],
};

export const bookReducer = (state = initial_State, action) => {
  switch (action.type) {
    case "USER_REGISTER_SUCCESS":
      return {
        ...state,
        currentUser: { ...action.payload },
      };

    case "ADD_TO_CART":
      const item = booklist.find((book) => book.id === action.payload.id);

      const inCart = state.cart.find((present) =>
        present.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((element) =>
              element.id === action.payload.id ? { ...element } : element
            )
          : [...state.cart, { ...item }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "ADJUST_BOOK_COUNT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, count: action.payload.value + item.count }
            : item
        ),
      };

    case "USER_LOGOUT":
      return {
        ...initial_State,
      };

    default:
      return state;
  }
};
