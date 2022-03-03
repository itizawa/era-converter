import type { NextPage } from 'next';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { EraCard, Header } from '~/components';

const Home: NextPage = () => {
  const [showResult, setShowResult] = useState(false);
  const [birthDate, setBirthDate] = useState<number>(2000);

  const handleClickConversionButton = useCallback(() => {
    setShowResult((prev) => !prev);
  }, []);

  const calculateEra = useCallback((birthDate: number, age: number) => {
    return birthDate - age;
  }, []);

  return (
    <body style={{ minHeight: '100vh', backgroundColor: '#eee' }}>
      <Header />

      <main style={{ maxWidth: '600px', margin: '20px auto', padding: '8px' }}>
        <p>あなたの生年月日を入力してください</p>

        <div style={{ textAlign: 'center', margin: '20px auto' }}>
          <StyledInput min={0} max={3000} type="number" value={birthDate} onChange={(e) => setBirthDate(parseInt(e.target.value))} />
        </div>
        <div style={{ textAlign: 'center', margin: '20px 0px' }}>
          <button onClick={handleClickConversionButton}>Conversion!!</button>
        </div>
        {showResult && (
          <div style={{ display: 'flex', flexDirection: 'column', gridRowGap: '24px' }}>
            <EraCard era="令和" years={calculateEra(birthDate, 2019)} reason="今上天皇の譲位" />
            <EraCard era="平成" years={calculateEra(birthDate, 1989)} name="今上天皇" reason="今上天皇即位による" />
            <EraCard era="昭和" years={calculateEra(birthDate, 1926)} name="昭和天皇" reason="昭和天皇践祚による" />
            <EraCard era="大正" years={calculateEra(birthDate, 1912)} name="大正天皇" reason="大正天皇践祚による" />
            <EraCard era="明治" years={calculateEra(birthDate, 1868)} name="明治天皇" reason="明治天皇践祚による" />
          </div>
        )}

        <p style={{ marginTop: '32px' }}>直近の元号に変換したものが表示されます!</p>

        <h4>
          ※当サイトの情報に誤りがある場合があります。
          <br />
          ご了承お願いします。
        </h4>
      </main>
    </body>
  );
};

const StyledInput = styled.input`
  height: 48px;
  font-size: 32px;
  border-radius: 5px;
  text-align: center;
  width: 120px;
`;

export default Home;
