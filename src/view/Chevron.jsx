import React from 'react';

function Chevron(props) {
  // component for image inside button
  const { direction } = props;

  return direction === 'right' ? (
    <svg xmlns="http://www.w3.org/2000/svg" className="size-1/2 fill-well-read-500" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" className="size-1/2 fill-well-read-500" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
    </svg>
  );
}

export default Chevron;
