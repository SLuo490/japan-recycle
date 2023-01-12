import Item from './components/Item';
import data from './data';
import { useState } from 'react';
import './index.css';

function App() {
  // render more rows of data with a click more button
  const [show, setShow] = useState(4);

  const showMore = () => {
    setShow(show + 4);
  };

  const showLess = () => {
    setShow(show - 4);
  };

  return (
    <div className='App'>
      {/* Show 5 items at first */}
      <div className='grid grid-cols-4 gap-5 m-20'>
        {data.slice(0, show).map((item) => (
          <Item item={item} />
        ))}
      </div>
      {/* Show more/less items with a click button */}
      {show <= 5 ? (
        <div className='m-20'>
          <button onClick={showMore}>Show More</button>
        </div>
      ) : (
        <div className='m-20'>
          <button onClick={showMore}>Show More</button>
          <button onClick={showLess}>Show Less</button>
        </div>
      )}
    </div>
  );
}

export default App;
