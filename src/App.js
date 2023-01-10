import Item from './components/Item';
import data from './data';

function App() {
  const itemElement = data.map((item) => {
    return <Item key={item.id} item={item} />;
  });

  return <div className='App'>{itemElement}</div>;
}

export default App;
