import type { NextPage } from 'next';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { EraCard, Header, MoreButton } from '~/components';
import { eras } from '~/constants/eras';
import { Era } from '~/interfaces/era';

const Home: NextPage = () => {
  const [showResult, setShowResult] = useState(false);
  const [birthDate, setBirthDate] = useState<number>(2000);
  const [additionalEras, setAdditionalEras] = useState<Era[]>([]);

  const handleClickConversionButton = useCallback(() => {
    const newEras = [
      eras[Math.floor(Math.random() * eras.length)],
      eras[Math.floor(Math.random() * eras.length)],
      eras[Math.floor(Math.random() * eras.length)],
      eras[Math.floor(Math.random() * eras.length)],
      eras[Math.floor(Math.random() * eras.length)],
    ].sort((a, b) => {
      return b.years - a.years;
    });
    setAdditionalEras(newEras);
    setShowResult(true);
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
        <div style={{ display: 'flex', flexDirection: 'column', gridRowGap: '24px' }}>
          <EraCard
            era={{ age: '令和', years: calculateEra(birthDate, 2019), name: '今上天皇', reason: '明仁から皇太子徳仁親王への譲位による' }}
          />
          <EraCard era={{ age: '平成', years: calculateEra(birthDate, 1989), name: '明仁上皇', reason: '皇太子明仁親王の即位による' }} />
          <EraCard era={{ age: '昭和', years: calculateEra(birthDate, 1926), name: '昭和天皇', reason: '昭和天皇践祚による' }} />
          <EraCard era={{ age: '大正', years: calculateEra(birthDate, 1912), name: '大正天皇', reason: '大正天皇践祚による' }} />
          <EraCard era={{ age: '明治', years: calculateEra(birthDate, 1868), name: '明治天皇', reason: '明治天皇践祚による' }} />
        </div>

        <div style={{ textAlign: 'center', margin: '50px 0px' }}>
          <MoreButton onClick={handleClickConversionButton}>{showResult ? '更新' : 'もっと見る'}</MoreButton>
        </div>
        {showResult && (
          <div style={{ display: 'flex', flexDirection: 'column', gridRowGap: '24px' }}>
            {additionalEras.map((additionalEra, index) => {
              return (
                <EraCard
                  key={index}
                  era={{
                    age: additionalEra.age,
                    years: calculateEra(birthDate, additionalEra.years),
                    name: additionalEra.name,
                    reason: additionalEra.reason,
                  }}
                />
              );
            })}
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
