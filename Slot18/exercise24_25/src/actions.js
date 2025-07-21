// Async action creators using Thunk

export const addProduct = (product) => (dispatch) => {
  // Simulate async API call
  setTimeout(() => {
    dispatch({ type: 'ADD_PRODUCT', payload: { ...product, id: Date.now().toString() } });
  }, 500);
};

export const addToCart = (product) => (dispatch) => {
  // Simulate async
  setTimeout(() => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  }, 300);
};

export const updateCartItem = (id, quantity) => (dispatch) => {
  // Simulate async
  setTimeout(() => {
    dispatch({ type: 'UPDATE_CART_ITEM', payload: { id, quantity } });
  }, 300);
};

export const removeFromCart = (id) => (dispatch) => {
  // Simulate async
  setTimeout(() => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  }, 300);
};