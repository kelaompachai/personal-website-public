import React from 'react';

function ImageButton(props) {
  const { title, link, image } = props;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-wrap text-white max-w-96 text-center font-extralight">{title}</h1>
      <div className="min-h-72 flex justify-around mt-5">
        <a href={link} className={`flex justify-center items-center h-64 w-96 rounded-3xl bg-center bg-no-repeat bg-cover ${image} hover:opacity-80 active:transform active:translate-y-0.5`}></a>
      </div>
    </div>
  );
}

export default ImageButton;
