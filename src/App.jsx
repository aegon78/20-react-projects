import { useState, useEffect } from 'react';
import './index.css';
import List from './components/List';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      toast.error('cant submit empty string');
    } else {
      const newItem = {
        text,
        id: new Date().getTime().toString(),
      };

      setItems([newItem, ...items]);
      setText('');
      setIsEditing(false);
      toast.success('New text Added!');
    }
  };

  // Edit Function
  const handleEdit = (id) => {
    const editingItem = items.find((item) => item.id === id);
    setItems(items.filter((item) => item.id !== id));
    setIsEditing(true);
    setText(editingItem.text);
    toast.info('item edited');
  };

  // Delete Function
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
    toast.info('Item was deleted');
  };

  // Clear List
  const handleClearList = () => {
    setItems([]);
    alert('do you really want to perform this action?')
    toast.info('List was deleted');

  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="todo-item">Add a todo</label>
          <input
            type="text"
            name="todo-item"
            id="todo-item"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <button type="submit">
          {isEditing ? 'Finish Editing' : '+ Add todo'}
        </button>
        <button
          type="button"
          style={{ marginLeft: '20px' }}
          onClick={handleClearList}
        >
          Clear
        </button>
      </form>

      <List items={items} handleDelete={handleDelete} handleEdit={handleEdit} />
      <ToastContainer />
    </div>
  );
}

export default App;
