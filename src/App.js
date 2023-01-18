import Item from './components/Item';
import Navbar from './components/Navbar';
import data from './data';
import { useState, useEffect } from 'react';
import './index.css';

function App() {
  // render more rows of data with a click more button
  const [show, setShow] = useState(12);

  const showMore = () => {
    setShow(show + 4);
  };

  const showLess = () => {
    setShow(show - 4);
  };

  useEffect(() => {
    if (show) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [show]);

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
      {show <= 12 ? (
        <div className='mx-20 my-5 float-right'>
          <button
            className='mr-2 border-none border-2 bg-sky-500 rounded-full text-white px-4 py-2 text-sm font-medium'
            onClick={showMore}
          >
            Show More
          </button>
        </div>
      ) : (
        <div className='mx-20 my-5 float-right'>
          <button
            className='mr-2 border-none border-2 bg-sky-500 rounded-full text-white px-4 py-2 text-sm font-medium'
            onClick={showMore}
          >
            Show More
          </button>
          <button
            className='border-none border-2 bg-lime-500 rounded-full text-white px-4 py-2 text-sm font-medium'
            onClick={showLess}
          >
            Show Less
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
