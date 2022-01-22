import { useState, useEffect } from 'react';
import './App.css';

// Components
import ChalkBoard from './components/ChalkBoard';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.resolvedHtml));
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {data !== null ?
            <ChalkBoard text={data[Math.floor(Math.random() * 10)]} />
            : 'Loading...'}
        </div>
      </header>
    </div>
  );
}

export default App;
