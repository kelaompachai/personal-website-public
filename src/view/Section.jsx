import React from 'react';
import Intro from './Intro';
import Projects from './Projects';
import Recs from './Recs';
import Talks from './Talks';

function Section(props) {
  const { title } = props;
  const fill = title === 'Intro'
    ? <Intro /> : title === 'Open Source Projects'
      ? <Projects /> : title === 'Talks & Publications'
        ? <Talks /> : <Recs />;

  const header = (
    <div className="flex justify-center mb-5">
      { title !== 'Intro' ? <h3 className="text-center text-4xl py-5 bg text-blue-100 rounded-3xl w-1/2">{title}</h3> : null }
    </div>
  );

  return (
    <section className="min-h-12 flex flex-col mx-32 my-5">
      {title !== 'Intro' ? header : null}
      { fill }
    </section>
  );
}

export default Section;
