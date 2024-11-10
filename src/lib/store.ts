import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Job, Application } from './types';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

interface AuthState {
  user: User | null;
  applications: Application[];
  setUser: (user: User | null) => void;
  addApplication: (application: Application) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      applications: [],
      setUser: (user) => set({ user }),
      addApplication: (application) => 
        set((state) => ({
          applications: [...state.applications, application]
        })),
    }),
    {
      name: 'auth-storage',
    }
  )
);