import React from 'react';
function Markdown({ markdown, setMarkdown }) {
  return (
    <div className="markdown">
      <textarea
        name="markdown"
        id="markdown"
        placeholder="type here..."
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
    </div>
  );
}

export default Markdown;
