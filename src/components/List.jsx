import React from 'react';

export default function List({ items }) {
  return (
    <div>
      {items.length === 1 ? '1 item' : `${items.length} items`}
      {items.map((item) => (
        <article key={item.id}>
          <h3>
            {item.text}
          </h3>

        </article>
      ))}
    </div>
  );
}
