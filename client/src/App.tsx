import { useState, useEffect } from 'react';
import './App.css';

// Components
import ChalkBoard from './components/ChalkBoard/ChalkBoard';

// API
import { fetchData } from './API';
// https://simpsons.fandom.com/wiki/List_of_chalkboard_gags
// https://www.ionos.com/domaincheckresult
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
    <div className="App" data-testid="app">
      <h1>
        Bart Simpson's Butt
      </h1>
      <button
        onClick={handleClick}
        data-testid="button"
      >
        New Gag
      </button>
        <div>
          {data !== null ?
            <ChalkBoard text={data} />
            : 'Loading...'}
      </div>
    </div>
  );
}

export default App;
