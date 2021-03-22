import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { useTransactions } from '../useTransactions';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

import { Container, CloseButton, TransactionTypeContainer, RadioBox } from './styles';

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

type ITransactionType = 'deposit' | 'withdraw';

export function NewTransactionModal({ isOpen, onRequestClose }: INewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState<ITransactionType>('deposit');
  const [category, setCategory] = useState('');

  async function handleCreateNewTransaction(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      type,
      category,
    });

    setTitle('');
    setAmount(0);
    setType('deposit');
    setCategory('');

    onRequestClose();
  }

  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <CloseButton type="button" onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar modal" />
      </CloseButton>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input 
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
          autoFocus
        />

        <input 
          placeholder="Valor" 
          type="number" 
          min={0}
          value={amount} 
          onChange={e => setAmount(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox 
            type="button"
            isActive={type === 'deposit'}
            activeColor='green'
            onClick={() => setType('deposit')}
          >
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadioBox>
          <RadioBox 
            type="button"
            isActive={type === 'withdraw'}
            activeColor='red'
            onClick={() => setType('withdraw')}
          >
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria" 
          value={category}
          onChange={e => setCategory(e.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}