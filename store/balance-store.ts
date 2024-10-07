import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { zustandStorage } from "./mmkv-storage";

export interface TransactionType {
  id: string;
  amount: number;
  title: string;
  date: Date;
}

export interface BalanceStateType {
  transactions: TransactionType[];
  runTransaction: (transaction: TransactionType) => void;
  balance: () => number;
  clearTransactions: () => void;
}

export const useBalanceStore = create<BalanceStateType>()(
  persist(
    (set, get) => ({
      transactions: [],
      runTransaction: (transaction: TransactionType) => {
        set((state) => ({
          transactions: [...state.transactions, transaction],
        }));
      },
      balance: () => {
        const { transactions } = get();
        let balance = 0;
        transactions.forEach((transaction) => {
          balance += transaction.amount;
        });
        return balance;
      },
      clearTransactions: () => {
        set({ transactions: [] });
      },
    }),
    {
      name: "balance-storage",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);
