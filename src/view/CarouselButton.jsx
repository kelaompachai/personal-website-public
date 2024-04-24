import React from 'react';
import Chevron from './Chevron';

function CarouselButton(props) {
  const { direction, carousel } = props;
  const fill = direction === 'left' ? <Chevron direction="left" /> : <Chevron direction="right" />;

  return (
    <button type="button" className="flex justify-center items-center size-24 border-2 border-well-read-500 rounded-3xl bg-well-read-200 hover:bg-well-read-300 active:transform active:translate-y-0.5" onClick={carousel}>{fill}</button>
  );
}

export default CarouselButton;
