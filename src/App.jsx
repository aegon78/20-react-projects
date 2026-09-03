import Markdown from './components/Markdown';
import Preview from './components/Preview';
import { useState } from 'react';
import { Remarkable } from 'remarkable'
import './index.css';

const md = new Remarkable
function App() {
  const [markdown, setMardown] = useState('')
  return (
    <div className='container'>
      <Markdown markdown={markdown} setMarkdown={setMardown}/>
      <Preview markdown={markdown} md={md}/>
      {console.log(markdown)}
    </div>
  );
}

export default App;
