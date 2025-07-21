import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
// Initial state for products
const initialProducts = [
  {
    id: '1',
    name: 'Dell XPS 13',
    price: 999,
    description: 'High-performance laptop',
    catalogs: ['Laptops', 'Electronics']
  },
  {
    id: '2',
    name: 'Apple MacBook Pro',
    price: 2500,
    description: 'Powerful Mac laptop',
    catalogs: ['Laptops', 'Apple']
  },
  // Add more initial products if needed
];

// Products Reducer
const productsReducer = (state = initialProducts, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.payload];
    default:
      return state;
  }
};

// Cart Reducer
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existing = state.find(item => item.id === action.payload.id);
      if (existing) {
        return state.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    case 'UPDATE_CART_ITEM':
      return state.map(item =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;