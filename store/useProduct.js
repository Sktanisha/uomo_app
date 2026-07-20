import { create } from 'zustand'
//import { persist } from 'zustand/middleware';

const useProduct = create(
    (set) => ({
    product: [],
    setProduct: (product) => set({ product }),
  }));

export { useProduct };