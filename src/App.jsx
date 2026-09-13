import React, { useState, useEffect } from 'react';
import { FaInstagram, FaGlobe, FaTwitter } from 'react-icons/fa';

import './index.css';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('keyboard')
  useEffect(() => {
    const getImages = async () => {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_UNSPLASH_API_KEY}&query=${query}`,
      );
      const data = await res.json();
      setImages(data.results);
      console.log(data);
    };

    getImages();
  }, []);

  return (
    <>
      <form>
        <label htmlFor="search">Search category</label>
        <input type="text" id='search' placeholder='Search category'/>
      </form>
      <section>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.urls.regular} alt={image.alt_description} />
            <h2>{image.user.name}</h2>
            {image.user.bio ? <p>{image.user.bio}</p> : null}
            <ul>
              {image.user.social.instagram_username ? (
                <li>
                  <a
                    href={`https://instagram/${image.user.social.instagram_username}`}
                  >
                    <FaInstagram />
                  </a>
                </li>
              ) : null}

              {image.user.social.twitter_username ? (
                <li>
                  <a
                    href={`https://twitter/${image.user.social.twitter_username}`}
                  >
                    <FaTwitter />
                  </a>
                </li>
              ) : null}

              {image.user.social.portfolio_url ? (
                <li>
                  <a href={image.user.social.portfolio_url}>
                    <FaGlobe />
                  </a>
                </li>
              ) : null}
            </ul>
            {image.description ? <p><b>About the image</b> {image.description} </p> : null}
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
