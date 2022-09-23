import createStore from 'zustand';
import { initialStateThemeStore, ThemeReducer } from './ThemeReducer';

export const useThemeStore = createStore((set) => ({
  ...initialStateThemeStore,
  dispatch: (args) => set((state) => ThemeReducer(state, args)),
}));
