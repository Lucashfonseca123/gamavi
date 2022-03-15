import {memo, ReactNode} from 'react';
import {Container} from './styles';

interface ICard {
  children: ReactNode;
}

const Card = ({children}: ICard) => {
  return <Container>{children}</Container>;
};

export default memo(Card);
