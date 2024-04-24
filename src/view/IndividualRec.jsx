import React from 'react';

function IndividualRec(props) {
  const { giver, relation, text } = props;
  return (
    <div className="flex justify-center items-center min-h-72 my-2.5">
      <div className="h-[26rem] flex flex-col max-w-xl bg-well-read-200 rounded-3xl">
        <div className="flex items-center justify-center">
          <div className="cheese flex-grow-0 mx-5 text-gray-800 font-medium">{giver}</div>
          {/* <div className="cheese bg bg-black h-px w-4"></div> */}
          <div className="cheese flex-grow-0 mx-5 text-gray-800 font-light">{relation}</div>
        </div>
        <div className="flex items-center justify-center flex-grow">
          <p className="cheese p-5 text-center text-gray-600 font-light">{text}</p>
        </div>
      </div>
    </div>
  );
}

// text-gray-600

export default IndividualRec;
