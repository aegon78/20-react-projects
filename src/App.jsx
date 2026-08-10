import './index.css'
import { cards } from './data'

function App() {

  return (
    <div className="container">
      <h1>list app</h1>

      <div className="cards">

        {cards.map(card =>

          <article>
            <h2>{card.name}</h2>
            <p>{card.bio}</p>
            <button className="danger">Remove</button>
          </article>
        
        )}
      </div>
    </div>
  )
}

export default App
