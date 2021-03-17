import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface IHeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: IHeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Money Honey"/>

        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>

       
      </Content>
    </Container>
  );
}
