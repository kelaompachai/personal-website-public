import React from 'react';

function Reach() {
  return (
    <>
      <div>
        <form className="flex flex-col">
          <label htmlFor="name">
            Name
            <input className="my-2" type="text" id="name"></input>
          </label>
          <label htmlFor="email">
            Email
            <input className="my-2" type="email" id="email"></input>
          </label>
          <label htmlFor="message">
            Message
            <textarea className="my-2" type="text" id="message"></textarea>
          </label>
          <input className="my-2" type="submit"></input>
        </form>
      </div>
      <div>
        <span>JosephLPaul@proton.me</span>
        <a href="https://www.github.com/kelaompachai">Github</a>
        <a href="https://www.linkedin.com/in/joseph-lawrence-paul">LinkedIn</a>
      </div>
    </>
  );
}

export default Reach;
