import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const res = await fetch(
        `https://api.unsplash.com/photos?client_id=${import.meta.env.VITE_UNSPLASH_API_KEY}`,
      );
      const data = await res.json();
      setImages(data);
      console.log(data);
    };

    getImages();
  }, []);

  return (
    <>
      <section>
        {images.map((image) => (
          <div key={image.id}>
            <img src={} alt="" />
            <h2>Satoshi Nakamoto</h2>
            <ul>
              <li>Facebook</li>
              <li>X</li>
              <li>Instagram</li>
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
