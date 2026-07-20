import { create } from 'zustand'
//import { persist } from 'zustand/middleware';

const useProducts = create(
    (set) => ({
    products: [],
    setProducts: (products) => set({ products }),
  }));

export { useProducts };