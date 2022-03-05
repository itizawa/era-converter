import { VFC } from 'react';
import styled from 'styled-components';

/**
 * Header
 */
export const Header: VFC = () => {
  return (
    <StyledHeader>
      <StyledHeader1>元号コンバーター</StyledHeader1>
      <StyledParagraph>あなたは明治〇〇年生まれ！？</StyledParagraph>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: #000080;
  color: white;
  box-shadow: 0px 2px 3px gray;
  text-align: center;
`;

const StyledHeader1 = styled.h1`
  padding: 20px 0px;
  font-weight: bold;
  font-size: 32px;
`;

const StyledParagraph = styled.p`
  padding: 4px 0px;
  background: #47abf4;
`;
