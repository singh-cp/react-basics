import React, { useState } from "react";
// import memeImage from "../images/meme-image.png";
import memesData from "../data/data";

function Form() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [allmemeImages, setAllmemeImages] = useState(memesData);

  function getMemeImage() {
    let memeArray = allmemeImages.data.memes;
    let randomNumber = Math.floor(Math.random() * memeArray.length);
    let url = memeArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  return (
    <div className="form">
      <div className="form-real">
        <div className="form-input">
          <input type="text" placeholder="Top Text" />
          <input type="text" placeholder="Bottom Text" />
        </div>
        <button onClick={getMemeImage}>
          Get a new meme image <i className="fa-solid fa-file-image"></i>
        </button>
      </div>
      <div>
        <div className="meme-content"></div>
        {meme.randomImage ? (
          <img src={meme.randomImage} alt="" id="meme-img" />
        ) : null}
      </div>
    </div>
  );
}

export default Form;
