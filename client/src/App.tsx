import { useState, useEffect } from 'react';
import './App.css';

// Components
import ChalkBoard from './components/ChalkBoard';


function App() {
  const [data, setData] = useState('');

  const fetchData = async () => {
    await fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.randomGag));
  }

  useEffect(() => {
    // show gag on initial render
    fetchData();
  }, []);

  const handleClick = () => {
    fetchData();
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {data !== null ?
            <ChalkBoard text={data} />
            : 'Loading...'}
        </div>
        <button onClick={handleClick}>New Gag</button>
      </header>
    </div>
  );
}

export default App;
