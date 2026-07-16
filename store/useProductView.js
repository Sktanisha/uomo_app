import { create } from 'zustand'
import { persist } from 'zustand/middleware';

const useProductView = create(
  persist((set) => ({
    view: 0,
    setView: (view) => set({ view }),
  }),{
    name:"product-view",
  }),
);

export { useProductView };