import type { NextPage } from 'next';
import { useCallback, useState } from 'react';
import { Header } from '~/components';
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
    <body>
      <Header />

      <main style={{ maxWidth: '600px', margin: '20px auto' }}>
        <p>あなたの生年月日を入力してください</p>

        <div className="chose">
          <input className="target" type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
        </div>
        <button onClick={handleClickConversionButton}>Conversion!!</button>
        {showResult && (
          <ul>
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
              <a href="#" className="twitter" data-id="H" target="_blank">
                Tweet!
              </a>
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
              <a href="#" className="twitter" data-id="S" target="_blank">
                Tweet!
              </a>
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
              <a href="#" className="twitter" data-id="T" target="_blank">
                Tweet!
              </a>
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
              <a href="#" className="twitter" data-id="M" target="_blank">
                Tweet!
              </a>
            </li>
          </ul>
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

export default Home;
