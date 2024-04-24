import { render, screen } from '@testing-library/react';
import ImageButton from '../src/view/ImageButton';


  it('looks like my image button', () => {
    const container = render(<ImageButton title="testTitle" image="testImage" link="testLink" />);
    expect(container.baseElement).toMatchSnapshot();

    // check for title
    expect(screen.queryByText(/testTitle/)).toBeInTheDocument();

    // check that a element has correct link and image
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'testLink');
    expect(link).toHaveClass('testImage');
  });