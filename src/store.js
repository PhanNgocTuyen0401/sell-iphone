import { create } from 'zustand'
// import Counter from "./conponents/counter";

const useNumberStore = create((set) => ({
  number: 100,
  info: {
    name: 'tuyen',
    age: 20,
  },
  //actions
  increment: () => set((state) => ({ number: state.number + 1 })),
  decrment: () => set((state) => ({ number: state.number - 1 })),
  setNumber: (val) => set({number: val}),
  updateNumber: (val) => set((state) => ({number: state.number + parseInt(val) })),
  clearNumber: (dataInfo) => set ({ info: dataInfo}),
}));

export default useNumberStore;