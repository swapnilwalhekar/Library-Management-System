export const RegisterSuccess = (user1) => {
  return {
    type: "USER_REGISTER_SUCCESS",
    payload: user1,
  };
};

export const addToCart1 = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const handleRemove = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id,
  };
};

export const adjustBookAmt = (id, n) => {
  return {
    type: "ADJUST_BOOK_COUNT",
    payload: {
      id,
      value: n,
    },
  };
};

export const userLogout = () => {
  return {
    type: "USER_LOGOUT",
  };
};
