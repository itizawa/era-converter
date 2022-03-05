import { ReactNode, VFC } from 'react';
import styled from 'styled-components';

type Props = {
  onClick: () => void;
  children: ReactNode;
};

export const MoreButton: VFC<Props> = ({ onClick, children }) => {
  return (
    <StyledButton role="button" onClick={onClick}>
      {children}
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
  background-color: #9247f4;
  width: 280px;

  :hover {
    background-color: #7a1df5;
  }
`;
