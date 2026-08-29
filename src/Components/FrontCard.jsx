import React from 'react';

const FrontCard = ( { setIsShowing } ) => {
  return (
    <>
      <div className="container" onClick={()=> setIsShowing(true)}>
        <h2>Mohammed Taha Kechad</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
          possimus unde ipsam magni quasi perspiciatis quo aut tempora beatae
          dicta cum,Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repudiandae
        </p>
      </div>
    </>
  );
};

export default FrontCard;
