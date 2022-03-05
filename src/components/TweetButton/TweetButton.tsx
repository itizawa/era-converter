import { VFC } from 'react';
import styled from 'styled-components';

type Props = {
  onClick: () => void;
};

export const TweetButton: VFC<Props> = ({ onClick }) => {
  return (
    <StyledButton role="button" onClick={onClick}>
      Tweet!
    </StyledButton>
  );
};

const StyledButton = styled.button`
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  color: white;
  border-radius: 10px;
  padding: 12px 32px;
  border: 1px solid;
  background-color: #47abf4;
  width: 280px;

  :hover {
    background-color: #1397d8;
  }
`;
