import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Button } from '../../components';

import './WordSetsCard.scss';

import cardImg from '../../assets/img/word-sets-img.jpg';

interface WordSetsCardProps {
  img: string;
  wordCount: number;
  name: string;
  id: string | number;
}

const WordSetsCard: React.FC<WordSetsCardProps> = observer(
  ({ img, wordCount, name, id }) => {
    return (
      <div className="word-sets-card">
        <div className="word-sets-card__box">
          <img src={cardImg} alt="" />
          <div className="word-sets-card__counter">{wordCount} слов</div>
          <div className="word-sets-card__wrapper">
            <Button type="success" size="sm">
              Добавить в словарь
            </Button>
          </div>
        </div>
        <Link
          to={`/wordsets/${id}`}
          className={classNames('word-sets-card__link', {
            lg: name.length < 25,
          })}>
          {name}
        </Link>
      </div>
    );
  },
);

export default WordSetsCard;
