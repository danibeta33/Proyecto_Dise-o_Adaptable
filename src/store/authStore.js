import { create } from 'zustand';

const useAuthStore = create((set) => ({
  userType: (localStorage.getItem('userType') || 'anonimo'), // 'perfil' | 'anonimo'
  setUserType: (type) => set(() => {
    try { localStorage.setItem('userType', type); } catch {}
    return { userType: type };
  }),
}));

export default useAuthStore;
