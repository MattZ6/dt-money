import { useTransactions } from "../useTransactions";

import moneyFormat from "../../utils/moneyFormat";
import dateFormat from "../../utils/dateFormat";

import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();

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
                  { moneyFormat(transaction.amount) }
                </td>
                <td>{transaction.category}</td>
                <td>
                { dateFormat(new Date(transaction.createdAt)) }  
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    
    </Container>
  );
}