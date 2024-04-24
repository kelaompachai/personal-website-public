import { screen, render } from '@testing-library/react';
import IndividualRec from '../src/view/IndividualRec';

describe('IndividualRec renders properly', () => {
  it('looks good', () => {
    expect(render(<IndividualRec giver="Chesterton" relation="brother" text="I am a huge fan of Joe." />).baseElement).toMatchSnapshot();

    // make sure props are in the document as text
    expect(screen.queryByText(/Chesterton/)).toBeInTheDocument();
    expect(screen.queryByText(/brother/)).toBeInTheDocument();
    expect(screen.queryByText(/I am a huge fan of Joe/)).toBeInTheDocument();
  });
});
