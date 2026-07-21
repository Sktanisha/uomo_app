import { create } from 'zustand'
//import { persist } from 'zustand/middleware';

const useProduct = create((set) => ({
  product: [],
  selectedCategory: "all",
  maxPrice: 1000,

  setProduct: (product) => set({ product }),

  setSelectedCategory: (category) =>
    set({ selectedCategory: category }),

  setMaxPrice: (price) =>
    set({ maxPrice: Number(price) }),
}))

export { useProduct };