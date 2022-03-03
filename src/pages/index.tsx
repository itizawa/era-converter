import type { NextPage } from 'next';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { EraCard, Header } from '~/components';
// import { getYear } from 'date-fns';

const Home: NextPage = () => {
  const [showResult, setShowResult] = useState(false);
  const [birthDate, setBirthDate] = useState<string>();

  const handleClickConversionButton = useCallback(() => {
    setShowResult((prev) => !prev);
  }, []);

  // const calculateEra = useCallback((age: number) => {
  //   if (date[0] > age) {
  //     return date[0] - age + 1;
  //   }
  //   if (date[0] == age) {
  //     if (date[0] == 2019) {
  //       if (date[1] < 5) {
  //         return '0 ';
  //       }
  //     }
  //     return '元 ';
  //   }
  //   return date[0] - age;
  // }, []);

  return (
    <body style={{ minHeight: '100vh', backgroundColor: '#eee' }}>
      <Header />

      <main style={{ maxWidth: '600px', margin: '20px auto', padding: '8px' }}>
        <p>あなたの生年月日を入力してください</p>

        <div style={{ textAlign: 'center', margin: '20px auto' }}>
          <StyledInput className="target" type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
        </div>
        <div style={{ textAlign: 'center', margin: '20px 0px' }}>
          <button onClick={handleClickConversionButton}>Conversion!!</button>
        </div>
        {showResult && (
          <div style={{ display: 'flex', flexDirection: 'column', gridRowGap: '24px' }}>
            <EraCard era="令和" years={1} reason="今上天皇の譲位" />
            <EraCard era="平成" years={1} name="今上天皇" reason="今上天皇即位による" />
            <EraCard era="昭和" years={1} name="昭和天皇" reason="昭和天皇践祚による" />
            <EraCard era="大正" years={1} name="大正天皇" reason="大正天皇践祚による" />
            <EraCard era="明治" years={1} name="明治天皇" reason="明治天皇践祚による" />
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
  text-align: right;
`;

export default Home;
