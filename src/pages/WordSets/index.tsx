import React from 'react';
import axios from 'axios';

import { WordSetsCard } from '../../components';

import './WordSets.scss';

interface Card {
  img: string;
  wordCount: number;
  name: string;
  id: string | number;
}

const WordSetsPage: React.FC = () => {
  const [wordSets, setWordSets] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/wordSets.db.json').then(({ data }) => {
      setWordSets(data.wordsets);
    });
  }, []);

  return (
    <div className="word-sets">
      <div className="row row-md">
        <h1 className="word-sets__title">Коллекции слов для словаря</h1>
        <div className="word-sets__content">
          {wordSets &&
            wordSets.map((card: Card) => (
              <WordSetsCard key={card.id} {...card} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default WordSetsPage;
