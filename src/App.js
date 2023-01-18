import Item from './components/Item';
import Navbar from './components/Navbar';
import data from './data';
import { useState, useEffect } from 'react';
import './index.css';

function App() {
  // render more rows of data with a click more button
  const [show, setShow] = useState(9);

  const showMore = () => {
    setShow(show + 6);
  };

  const showLess = () => {
    setShow(show - 6);
  };

  // scroll to the bottom of the screen whenever show is rendered
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
      {/* Show 9 items at first */}
      <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-10 mx-10'>
        {data.slice(0, show).map((item) => (
          <Item item={item} />
        ))}
      </div>
      {/* Show more/less items with a click button */}
      {show <= 12 ? (
        <div className='mx-20 my-5 float-right'>
          <button
            className='mr-2 border-none border-2 bg-gray-900 hover:bg-gray-300 hover:text-black rounded-full text-white px-4 py-2 text-sm font-medium'
            onClick={showMore}
          >
            Show More
          </button>
        </div>
      ) : (
        <div className='mx-20 my-5 float-right'>
          <button
            className='mr-2 border-none border-2 bg-gray-700 hover:bg-gray-300 hover:text-black rounded-full text-white px-4 py-2 text-sm font-medium'
            onClick={showMore}
          >
            Show More
          </button>
          <button
            className='border-none border-2 bg-gray-300 rounded-full text-black hover:bg-gray-900 hover:text-white px-4 py-2 text-sm font-medium'
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
