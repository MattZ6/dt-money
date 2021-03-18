import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Container } from "./styles";

interface ITransaction {
  id: number;
  title: string;
  category: string;
  type: 'deposit' | 'withdraw';
  amount: number;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    async function getTransactions() {
      const { data } = await api.get<{ transactions: ITransaction[] }>('/transactions');

      setTransactions(data.transactions);
    }

    getTransactions();
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {
            transactions.map(transaction => (
              <tr key={transaction.id}>    
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  { new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(transaction.amount) }
                </td>
                <td>{transaction.category}</td>
                <td>
                { new Intl.DateTimeFormat('pt-br').format(new Date(transaction.createdAt)) }  
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    
    </Container>
  );
}