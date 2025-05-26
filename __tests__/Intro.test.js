import { render, screen } from '@testing-library/react';
import Intro from '../src/view/Intro';

it('looks like my Intro component', () => {
  const container = render(<Intro />);
  expect(container.baseElement).toMatchSnapshot();


  const image = screen.getByRole('img');

  // checking image element
  expect(image).toHaveAttribute('src', 'testFileStub');
  expect(image).toHaveAttribute('alt', 'My beautiful face');

  // checking that intro text is present
  expect(screen.queryByText(/Hi, I'm Joe Paul/)).toBeInTheDocument();

  // checking that my email is present
  expect(screen.queryByText(/jobs.alarm618@passinbox.com/i)).toBeInTheDocument();  

  // checking for github and linkedin
  const github = screen.queryByText(/Github/)
  expect(github).toBeInTheDocument();
  expect(github).toHaveRole('link');
  expect(github).toHaveAttribute('href', 'https://www.github.com/kelaompachai');

  const linkedin = screen.queryByText(/LinkedIn/);
  expect(linkedin).toBeInTheDocument();
  expect(linkedin).toHaveRole('link');
  expect(linkedin).toHaveAttribute('href', 'https://www.linkedin.com/in/joseph-lawrence-paul');
});