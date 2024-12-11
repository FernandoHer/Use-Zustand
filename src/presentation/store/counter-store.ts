import { create } from "zustand"

export interface CounterState {
    count: number,
    incrmentBy: (value: number) => void
}

export const useCountStore = create<CounterState>()( (set, get ) =>({
    count: 1,

   incrmentBy: (number) => {
    set((state) => ({count: state.count + number}))
   }
}))