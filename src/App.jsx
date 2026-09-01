import Markdown from './components/Markdown';
import Preview from './components/Preview';
import './index.css';

function App() {
  return (
    <div className='container'>
      <Markdown />
      <Preview />    
    </div>
  );
}

export default App;
