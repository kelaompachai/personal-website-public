import React from 'react';
import { render } from '@testing-library/react';
import Chevron from '../src/view/Chevron';

describe('Chevron renders properly', () => {
  it('points right', () => {
    expect(render(<Chevron direction="right" />).baseElement).toMatchSnapshot();
  });

  it('points left', () => {
    expect(render(<Chevron direction="left" />).baseElement).toMatchSnapshot();
  });
});
