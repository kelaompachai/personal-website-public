import React from 'react';
import Intro from './Intro';
import Projects from './Projects';
import Reach from './Reach';
import Recs from './Recs';
import Talks from './Talks';

function Section(props) {
  const { title } = props;
  const fill = title === 'Intro'
    ? <Intro /> : title === 'Open Source Projects'
      ? <Projects /> : title === 'Talks & Publications'
        ? <Talks /> : title === 'Recommendations'
          ? <Recs /> : <Reach />;

  return (
    <section className="min-h-12 border-2 border-black border-solid flex flex-col rounded-3xl mx-32 my-5">
      <div className="flex justify-center mb-5">
        { title !== 'Intro' ? <h3 className="text-center text-2xl py-5 bg bg-well-read-400 rounded-3xl w-1/2">{title}</h3> : null }
      </div>
      { fill }
    </section>
  );
}

export default Section;
