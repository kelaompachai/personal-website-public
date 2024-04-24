import React from 'react';
import talksList from '../model/talks';
import ImageButton from './ImageButton';

function Talks() {
  const talkComponents = talksList.map(
    (el, index) => <ImageButton title={el.title} image={el.image} link={el.link} key={`Talk ${index}`} />
  );
  return (
    <div className="grid grid-cols-2 gap-4">
      {talkComponents}
    </div>
  );
}

export default Talks;
