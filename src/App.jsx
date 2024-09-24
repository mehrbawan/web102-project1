import './App.css';
import Container from './components/Container';
import Card from './components/Card';

const App = () => {

  return (
    <div className="App">
      <header>
      <span><img class="head-image" src="src/assets/spr.png" width="70px"></img><img class="head-image" src="src/assets/paw.png" width="100px"></img><img class="head-image" src="src/assets/spr.png" width="70px"></img></span>
        <h1>Cats for Adoption in Virginia</h1></header>
      <h2>Adopt, don't shop, and find your purrfect companion today!</h2>
      <Container />
      <p>Icons by Freepik, listings from PetFinder</p>
    </div>
  )
}

export default App;