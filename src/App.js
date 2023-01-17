import Item from './components/Item';
import Navbar from './components/Navbar';
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
      <Navbar />
      {/* Show 5 items at first */}
      <div className='grid grid-cols-4 gap-5 mx-20 mt-20'>
        {data.slice(0, show).map((item) => (
          <Item item={item} />
        ))}
      </div>
      {/* Show more/less items with a click button */}
      {show <= 5 ? (
        <div className='mx-20 mt-5'>
          <button onClick={showMore}>Show More</button>
        </div>
      ) : (
        <div className='mx-20 mt-5'>
          <button
            className='mr-2 border-b-4 border-indigo-500'
            onClick={showMore}
          >
            Show More
          </button>
          <button className='border-b-4 border-indigo-500' onClick={showLess}>
            Show Less
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
