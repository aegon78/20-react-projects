import { useState } from 'react';
import './index.css';
import List from './components/List';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

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
      toast.success('New text Added!');
    }
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
        <button type="submit" onClick={handleSubmit}>
          + Add todo
        </button>
      </form>

      <List items={items} />
      <ToastContainer />
    </div>
  );
}

export default App;
