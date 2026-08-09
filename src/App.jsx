import './index.css'
const cards = [
  {
  name: "Satoshi Nakamoto",
  bio: "fuck the government",
  },
  {
  name: "Donald Trump",
  bio: "make america great again",
  },
  {
  name: "Phil Dunphy",
  bio: "when life gives you lemons, make lemonade",
  },
  {
  name: "Walter White",
  bio: "Say my name!",
  }
]

function App() {

  return (
    <div className="container">
      <h1>list app</h1>

      <div className="cards">
        {cards.map(card =>

          <article>
            <h2>{card.name}</h2>
            <p>{card.bio}</p>
          </article>
        
        )}
        {/* <article>
          <h2>Satoshi Nakamoto</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </article>

        <article>
          <h2>Jane Doe</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </article>

        <article>
          <h2>Walter White</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </article>

        <article>
          <h2>Donald Trump</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </article>
 */}
      </div>
    </div>
  )
}

export default App
