import { useMemo } from 'react';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { useTransactions } from '../useTransactions';

import moneyFormat from '../../utils/moneyFormat';

import { Container } from './styles';

export function Summary() {
  const { transactions } = useTransactions();

  const { deposits, withdraws, total } = useMemo(() => transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws -= transaction.amount;
      acc.total -= transaction.amount;
    }
    
    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  }), [transactions]);

  return (
    <Container>
      <div>
        <header>
          <span>Entradas</span>

          <img src={incomeImg} alt="Entradas" />
        </header>

        <strong>{ moneyFormat(deposits) }</strong>
      </div>

      <div>
        <header>
          <span>Saídas</span>

          <img src={outcomeImg} alt="Saídas" />
        </header>

        <strong>{ moneyFormat(withdraws) }</strong>
      </div>

      <div>
        <header>
          <span>Total</span>

          <img src={totalImg} alt="Total" />
        </header>

        <strong>{ moneyFormat(total) }</strong>
      </div>
    </Container>
  );
}
