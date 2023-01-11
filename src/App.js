import Item from './components/Item';
import data from './data';
import { useState } from 'react';
import './index.css';

function App() {
  // render more rows of data with a click more button
  const [show, setShow] = useState(5);

  const showMore = () => {
    setShow(show + 5);
  };

  const showLess = () => {
    setShow(show - 5);
  };

  return (
    <div className='App'>
      {/* Show 5 items at first */}
      {data.slice(0, show).map((item) => (
        <Item item={item} />
      ))}
      {/* Show more/less items with a click button */}
      {show <= 5 ? (
        <button onClick={showMore}>Show More</button>
      ) : (
        <div>
          <button onClick={showMore}>Show More</button>
          <button onClick={showLess}>Show Less</button>
        </div>
      )}
    </div>
  );
}

export default App;
