import React from 'react';
import { render, screen } from '@testing-library/react';
import CarouselButton from '../src/view/CarouselButton';


it('CarouselButton', () => {
  expect(render(<CarouselButton />).baseElement).toMatchSnapshot();

  // make sure there is a button
  const btn = screen.queryByRole('button');
  expect(btn).toBeInTheDocument();

  // make sure button is not disabled
  expect(btn).not.toBeDisabled();


  // check whether it goes down when pressed?
  // I think this is more of an end-to-end test--I don't know how to do it with RTL
});
