import { create } from 'zustand';

const defaultProfile = {
  city: 'Medellín, Antioquia',
  career: 'Comunicación Social',
  photo: null, // string URL or null
};

function loadProfile() {
  try {
    const raw = localStorage.getItem('profile');
    if (!raw) return defaultProfile;
    const parsed = JSON.parse(raw);
    return { ...defaultProfile, ...parsed };
  } catch {
    return defaultProfile;
  }
}

const useProfileStore = create((set) => ({
  profile: loadProfile(),
  setProfile: (updates) => set((state) => {
    const next = { ...state.profile, ...updates };
    try { localStorage.setItem('profile', JSON.stringify(next)); } catch {}
    return { profile: next };
  }),
  resetProfile: () => set(() => {
    try { localStorage.removeItem('profile'); } catch {}
    return { profile: defaultProfile };
  }),
}));

export default useProfileStore;
