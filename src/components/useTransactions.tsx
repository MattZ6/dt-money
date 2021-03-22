import { createContext, useEffect, useState, ReactNode, useContext } from 'react';

import { api } from '../services/api';

interface ITransaction {
  id: number;
  title: string;
  category: string;
  type: 'deposit' | 'withdraw';
  amount: number;
  createdAt: string;
}

interface ITransactionsProvider {
  children: ReactNode;
}

type ICreateTransactionData = Omit<ITransaction, 'id' | 'createdAt'>;

interface ICreateTransactionResponse {
  transaction: ITransaction;
}

interface ITransactionsContext {
  transactions: ITransaction[];
  createTransaction: (data: ICreateTransactionData) => Promise<void>;
}

export const TransactionsContext = createContext<ITransactionsContext>({} as ITransactionsContext);

export function TransactionsProvider({ children }: ITransactionsProvider) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  async function createTransaction(data: ICreateTransactionData) {
    const response = await api.post<ICreateTransactionResponse>('/transactions', data);

    const { transaction } = response.data;

    setTransactions(state => [transaction, ...state]);
  }

  useEffect(() => {
    async function getTransactions() {
      const { data } = await api.get<{ transactions: ITransaction[] }>('/transactions');

      setTransactions(data.transactions);
    }

    getTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{
      transactions,
      createTransaction,
    }}>
      {children}
    </TransactionsContext.Provider>
  );
} 

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
