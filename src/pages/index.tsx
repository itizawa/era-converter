import type { NextPage } from 'next';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { EraCard, Header } from '~/components';
import { TweetButton } from '~/components/TweetButton/TweetButton';
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
          <>
            <EraCard era="令和" years={1} reason="今上天皇の譲位" />
            <li className="box">
              <h2>
                令和 <span className="result" id="N"></span> 年生まれです！
              </h2>
              <p>
                （天皇名未定）
                <br />
                改元理由：今上天皇の譲位
              </p>
              <TweetButton onClick={() => console.log('hoge')} />
            </li>
            <li className="box">
              <h2>
                平成 <span className="result" id="H"></span> 年生まれです！
              </h2>
              <p>
                今上天皇の時代です
                <br />
                改元理由：今上天皇即位による
              </p>
              <TweetButton onClick={() => console.log('hoge')} />
            </li>
            <li className="box">
              <h2>
                昭和 <span className="result" id="S"></span> 年生まれです！
              </h2>
              <p>
                昭和天皇の時代です
                <br />
                改元理由：昭和天皇践祚による
              </p>
              <TweetButton onClick={() => console.log('hoge')} />
            </li>
            <li className="box">
              <h2>
                大正 <span className="result" id="T"></span> 年生まれです！
              </h2>
              <p>
                大正天皇の時代です
                <br />
                改元理由：大正天皇践祚による
              </p>
              <TweetButton onClick={() => console.log('hoge')} />
            </li>
            <li className="box">
              <h2>
                明治 <span className="result" id="M"></span> 年生まれです！
              </h2>
              <p>
                明治天皇の時代です
                <br />
                改元理由：明治天皇践祚による
              </p>
              <TweetButton onClick={() => console.log('hoge')} />
            </li>
          </>
        )}

        <p>直近の元号に変換したものが表示されます!</p>

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
