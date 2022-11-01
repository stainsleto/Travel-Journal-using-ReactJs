import './App.css';
import Header from './components/header.js';
import ProductCard from './components/ProductCard';
import data from './components/data';

function App() {
  const cards = data.map( (item)=>{
    return(
      <ProductCard
      key={item.id}
      item={item}
      />
      
    )
  })
  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  );
}

export default App;
