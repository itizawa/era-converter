import type { NextPage } from 'next';
import { useCallback, useState } from 'react';

const Home: NextPage = () => {
  const [showResult, setShowResult] = useState(false);

  const handleClickConversionButton = useCallback(() => {
    setShowResult(true);
  }, []);

  return (
    <body style={{ maxWidth: '600px' }}>
      <header>
        <h1>元号コンバーター</h1>
        <p>あなたは明治〇〇年生まれ！？</p>
      </header>

      <main>
        <p>あなたの生年月日を入力してください</p>

        <div className="chose">
          <input className="target" type="date" value="2000-01-01" />
        </div>
        <button onClick={handleClickConversionButton}>Conversion!!</button>
        {showResult && (
          <ul>
            <li className="box">
              <h2>
                令和 <span className="result" id="N"></span> 年生まれです！
              </h2>
              <p>
                {' '}
                （天皇名未定）
                <br />
                改元理由：今上天皇の譲位
              </p>
              <a href="#" className="twitter" data-id="N" target="_blank">
                Tweet!
              </a>
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

        <p>
          <br />
          直近の元号と江戸時代以前の元号が<span style={{ color: 'red' }}>3つ</span>表示されます!
        </p>

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
