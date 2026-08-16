import React from 'react';

export default function List({ items, handleDelete, handleEdit }) {
  return (
    <div>
      {items.length === 1 ? '1 item' : `${items.length} items`}
      {items.map((item) => (
        <article key={item.id}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
                        
          }}>
            <h3>{item.text}</h3>
            
            <ul className='btns-ul'>
              <li><button onClick={()=> handleEdit(item.id)} className="edit-btn">Edit</button></li>
              <li><button onClick={()=> handleDelete(item.id)} className="delete-btn">Delete</button></li>
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
