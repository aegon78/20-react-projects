import Markdown from './components/Markdown';
import Preview from './components/Preview';
import { useState } from 'react';
import './index.css';

function App() {
  const [markdown, setMardown] = useState('')
  return (
    <div className='container'>
      <Markdown markdown={markdown} setMarkdown={setMardown}/>
      <Preview markdown={markdown} />
      {console.log(markdown)}
    </div>
  );
}

export default App;
