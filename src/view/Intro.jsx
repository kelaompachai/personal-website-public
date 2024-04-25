import React from 'react';
import text from '../model/intro';
import profilePhoto from '../../assets/profile-photo.jpg';

function Intro() {
  return (
    <div className="flex text-lg font-light">
      <img className="rounded-full mx-7 object-contain size-36" src={profilePhoto} alt="My beautiful face"></img>
      <p className="mx-7">{text}</p>
      <div className="flex flex-col items-center">
        <span>JosephLPaul@proton.me</span>
        <a className="text-well-read-400 underline" href="https://www.github.com/kelaompachai">Github</a>
        <a className="text-well-read-400 underline" href="https://www.linkedin.com/in/joseph-lawrence-paul">LinkedInLink</a>
      </div>
    </div>
  );
}

export default Intro;
