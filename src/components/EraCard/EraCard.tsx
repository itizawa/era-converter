import { useRouter } from 'next/router';
import { VFC } from 'react';
import styled from 'styled-components';

import { TweetButton } from '~/components';
import { Era } from '~/interfaces/era';

type Props = {
  era: Era;
};

export const EraCard: VFC<Props> = ({ era }) => {
  const { age, years, name, reason } = era;
  const router = useRouter();
  const tweetUrl =
    `https://twitter.com/intent/tweet?text=私は ${age}${years}年 生まれです https://converter-of-era.vercel.app` +
    '&hashtags=元号コンバーター';

  return (
    <StyledDiv>
      <span style={{ fontWeight: 'bold' }}>{age}</span> <StyledYearsText>{years}</StyledYearsText> 年生まれです！
      <p style={{ marginTop: '20px', textAlign: 'center' }}>{name}</p>
      <p style={{ marginTop: '8px', textAlign: 'center' }}>改元理由：{reason}</p>
      <div style={{ marginTop: '12px', textAlign: 'center' }}>
        <TweetButton onClick={() => router.push(tweetUrl)} />
      </div>
    </StyledDiv>
  );
};

const StyledYearsText = styled.span`
  @keyframes result {
    to {
      background-position-x: 200%;
    }
  }

  font: bold 2em / 1 Verdana, Helvetica, Arial, sans-serif;
  text-transform: uppercase;

  /* 背景グラデーションを指定・幅を 200% にしておく */
  background: linear-gradient(to right, #f00 0%, #f80 14.28%, #dd0 28.56%, #0d0 42.85%, #0dd 57.14%, #00f 71.42%, #e0e 85.71%, #f00 100%) 0%
    center / 200% auto;

  /* 背景画像を文字でマスクする */
  background-clip: text;
  -webkit-background-clip: text;

  /* 文字色を透明にできればよく color: transparent でも color: rgba(0, 0, 0, 0) でも可 */
  -webkit-text-fill-color: transparent;

  /* アニメーション指定 */
  animation: result 4s linear infinite;
`;

const StyledDiv = styled.div`
  padding: 16px;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
`;
