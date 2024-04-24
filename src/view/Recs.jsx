import React, { useState } from 'react';
import IndividualRec from './IndividualRec';
import recsList from '../model/recommendations';
import CarouselButton from './CarouselButton';

function Recs() {
  const [showing, setShowing] = useState(0);

  const recsArray = recsList.map(
    (el) => <IndividualRec giver={el.giver} relation={el.relation} text={el.text} />
  );

  function carousel(direction) {
    if (direction === 'right') setShowing((showing + 1) % recsArray.length);
    else setShowing((showing + recsArray.length - 1) % recsArray.length);

    const elements = document.querySelectorAll('.cheese');

    elements.forEach((el) => {
      el.classList.remove('animate-blurin');
    });

    const cheese = elements[0].offsetWidth;

    elements.forEach((el) => {
      el.classList.add('animate-blurin');
    });
  }

  return (
    <div className="flex items-center justify-around" >
      <CarouselButton direction="left" carousel={() => { carousel('left'); }} />
      <div className="flex items-center justify-center">
        {recsArray[showing]}
      </div>
      <CarouselButton direction="right" carousel={() => { carousel('right'); }} />
    </div>
  );
}

export default Recs;
