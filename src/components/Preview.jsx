import React from 'react';

function Preview({ markdown, md }) {
  return (
    <div
      className="preview"
      dangerouslySetInnerHTML={{ __html: md.render(markdown) }}
    ></div>
  );
}

export default Preview;
