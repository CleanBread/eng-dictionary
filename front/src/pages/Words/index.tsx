import React from 'react';

import './Words.scss';

const WordsPage: React.FC = () => {
  return (
    <div className="words">
      <div className="row row-md">
        <h1>Тренировка слов</h1>
        <div className="words__info box">
          <div className="words__info-left"></div>
          <div className="words__info-right">
            <div className="words__info-card">
              <div className="words__info-card-title">
                Созревшие на сегодня (0)
              </div>
              <div className="words__info-card-subtitle">
                Повторять пока нечего
              </div>
            </div>
            <div className="words__info-card">
              <div className="words__info-card-title">
                Новые слова для изучения (0)
              </div>
              <div className="words__info-card-subtitle">
                На сегодня вы выполнили план по тренировкам
              </div>
            </div>
            <div className="words__info-card">
              <div className="words__info-card-title">На созревании (0)</div>
              <div className="words__info-card-subtitle">
                Слов на созревании пока нету
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordsPage;
