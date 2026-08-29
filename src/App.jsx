import { useState } from 'react';
import './index.css';
import FrontCard from './Components/FrontCard';
import BackCard from './Components/BackCard';

function App() {
  const [isShowing, setIsShowing] = useState(false)
  return (
    <>
      {isShowing ? <BackCard /> : <FrontCard />}
    </>
  )
}

export default App;
