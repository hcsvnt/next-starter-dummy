// import create from 'zustand';
import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

interface BearStore {
    bears: number;
    actions: {
        increasePopulation: () => void;
        removeAllBears: () => void;
    };
}

const useGlobalStore = create<BearStore>(set => ({
    bears: 0,
    actions: {
        increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
        removeAllBears: () => set({ bears: 0 })
    }
}));

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Global Store', useGlobalStore);
}

export const useBears = () => useGlobalStore(state => state.bears);
export const useBearActions = () => useGlobalStore(state => state.actions);
