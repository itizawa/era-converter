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
  border-radius: 5px;
  padding: 8px 32px;
  border: 1px solid;
  background-color: #47abf4;

  :hover {
    background-color: #1397d8;
  }
`;
