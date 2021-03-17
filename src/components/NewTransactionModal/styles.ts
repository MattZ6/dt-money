import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.form`
  > h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  > input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: var(--input-background-color);
    border: 1px solid var(--text-body);
    font-weight: 400;
    font-size: 1rem;
    color: var(--text-title);
    transition: border-color 200ms;
    
    &:hover,
    &:focus {
      border-color: var(--text-title);
    }

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  > button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter 200ms;
    font-weight: 600;

    &:hover,
    &:focus {
      filter: brightness(0.9);
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  width: 2.5rem;
  height: 2.5rem;
  border-radius: 2.5rem;

  background: transparent;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 200ms;

  &:hover,
  &:focus {
    background: var(--input-background-color);
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface IRadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d',
}

export const RadioBox = styled.button<IRadioBoxProps>`
  height: 4rem;
  border: 1px solid var(--text-body);
  border-radius: 0.25rem;

  background: ${({ isActive, activeColor }) => isActive ? transparentize(0.9, colors[activeColor]) : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 200ms, background-color 200ms;

  &:hover,
  &:focus {
    border-color: var(--text-title);
  }

  > img {
    width: 20px;
    height: 20px;
  }

  > span {
    display: inline-block;
    font-size: 1rem;
    margin-left: 1rem;
    color: var(--text-title);
  }
`;
