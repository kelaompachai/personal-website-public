import React from 'react';
import Section from './view/Section';

function App() {
  return (
    <div className="text-well-read-100">
      <Section title="Intro" />
      <Section title="Open Source Projects" />
      <Section title="Talks & Publications" />
      <Section title="Recommendations" />
    </div>
  );
}

export default App;
