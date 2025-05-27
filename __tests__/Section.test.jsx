import React from 'react';
import { render, screen } from '@testing-library/react';
import Section from '../src/view/Section';

describe('Section component renders properly', () => {
  it('looks good as Intro', () => {
    const container = render(<Section title="Intro" />);
    expect(container.baseElement).toMatchSnapshot();
    expect(screen.queryByText(/Intro/i)).not.toBeInTheDocument();
  });
  it('looks good as something else', () => {
    const container = render(<Section title="Open Source Projects" />);
    expect(container.baseElement).toMatchSnapshot();
    expect(screen.queryByText(/Open Source Projects/)).toBeInTheDocument();
  });
});
