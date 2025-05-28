import React from 'react';
import Chevron from './Chevron';

function CarouselButton(props) {
  const { direction, carousel } = props;
  const fill = direction === 'left' ? <Chevron direction="left" /> : <Chevron direction="right" />;

  return (
    <button type="button" className="flex justify-center items-center size-24 border-2 border-blue-500 rounded-3xl bg-blue-200 opacity-60 hover:opacity-100 active:transform active:translate-y-0.5 cursor-pointer" onClick={carousel}>{fill}</button>
  );
}

export default CarouselButton;
