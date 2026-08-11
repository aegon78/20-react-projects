import { useState } from 'react'
import './index.css'
import List from './components/List'

function App() {
  const [text, setText] = useState('')
  const [items, setItems] = useState([])
  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='todo-item'>Add a todo</label>
          <input type="text" name="todo-item" id="todo-item" value={text} onChange={(e)=> setText(e.target.value)} />
        </div>
        <button type="submit" onClick={handleSubmit}>+ Add todo</button>
      </form>
      <List className="danger"/>
    </div>
  )
}

export default App
