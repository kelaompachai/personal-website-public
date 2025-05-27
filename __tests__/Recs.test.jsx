import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Recs from '../src/view/Recs';


describe('Recs component renders properly', () => {
  it('matches snapshot and changes content when the button is pushed', async () => {
    expect(render(<Recs />).baseElement).toMatchSnapshot();

    const btn = screen.getAllByRole('button')[0];
    expect(btn).not.toBeDisabled();

    expect(screen.queryByText(/Joe was a great asset to our team/)).toBeInTheDocument();

    await userEvent.click(btn);

    expect(screen.queryByText(/Joe was a great asset to our team/)).not.toBeInTheDocument();
  });
});
