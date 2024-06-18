import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: localStorage.getItem('ID'),
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
  setUser: (user) => set({ user }),
}));
export default useAuthStore;
