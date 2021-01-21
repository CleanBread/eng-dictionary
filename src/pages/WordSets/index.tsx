import React from 'react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';

import { WordSetsCard } from '../../components';
import { useMst } from '../../stores/root';

import './WordSets.scss';

interface Card {
  img: string;
  wordCount: number;
  name: string;
  id: string | number;
}

const WordSetsPage: React.FC = observer(() => {
  const { wordSets } = useMst();

  React.useEffect(() => {
    if (!wordSets.items.length) {
      axios.get('http://localhost:3000/wordSets.db.json').then(({ data }) => {
        wordSets.addItems(data.wordsets);
      });
    }
  }, []);

  return (
    <div className="word-sets">
      <div className="row row-md">
        <h1 className="word-sets__title">Коллекции слов для словаря</h1>
        <div className="word-sets__content">
          {wordSets.items &&
            wordSets.items.map((card: Card) => (
              <WordSetsCard key={card.id} {...card} />
            ))}
        </div>
      </div>
    </div>
  );
});

export default WordSetsPage;
