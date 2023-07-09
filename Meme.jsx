import React from "react";
import memesData from "./memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState(
    "https://pixy.org/src/62/622342.jpg"
  );

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <main>
      <div className="container flex-col align">
        <div className="flex-row align">
          <input type="text" placeholder="Enter upper text"></input>
          <input type="text" placeholder="Enter lower text"></input>
        </div>
        <button className="button" onClick={getMemeImage}>
          Generate <i className="fa-regular fa-image"></i>
        </button>
        <img src={memeImage} />
      </div>
    </main>
  );
}
