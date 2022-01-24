import { useState, useEffect } from 'react';
import './App.css';

// Components
import ChalkBoard from './components/ChalkBoard/ChalkBoard';

// API
import { fetchData } from './API';
// https://simpsons.fandom.com/wiki/List_of_chalkboard_gags
function App() {
  const [data, setData] = useState('');

  const fetchApi = async () => {
    const gag = await fetchData();
    if (gag) {
      setData(gag);
    }
    return gag;
  }
  useEffect(() => {
    // show gag on initial render
    fetchApi();
  }, []);

  const handleClick = () => {
    fetchApi();
  }

  return (
    <div className="App">
      <h1>
        Bart Simpson's Butt
      </h1>
        <div>
          {data !== null ?
            <ChalkBoard text={data} />
            : 'Loading...'}
        </div>
      <button
        onClick={handleClick}
        datat-id="button"
      >
        New Gag
      </button>
    </div>
  );
}

export default App;
