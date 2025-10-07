// TODO: Uncomment when Redux is properly set up
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { User } from '../../types';

// Temporary placeholder export to fix compilation
export const loginStart = () => ({ type: 'auth/loginStart' });
export const loginSuccess = (user: any) => ({ type: 'auth/loginSuccess', payload: user });
export const loginFailure = (error: string) => ({ type: 'auth/loginFailure', payload: error });
export const logout = () => ({ type: 'auth/logout' });
export const updateProfile = (data: any) => ({ type: 'auth/updateProfile', payload: data });
export const clearError = () => ({ type: 'auth/clearError' });

const authReducer = (state = { user: null, isAuthenticated: false }, _action: any) => {
  return state;
};

export default authReducer;