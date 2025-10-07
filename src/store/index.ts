// TODO: Uncomment when Redux is properly set up
// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './slices/authSlice';
// import cartReducer from './slices/cartSlice';

// Temporary placeholder store
export const store = {
  getState: () => ({ auth: { user: null }, cart: { items: [] } }),
  dispatch: (action: any) => console.log('Action:', action),
  subscribe: (_listener: any) => () => {},
};

export type RootState = {
  auth: { user: null | any };
  cart: { items: any[] };
};
export type AppDispatch = typeof store.dispatch;