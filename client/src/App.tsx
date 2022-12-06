import React, { useState } from 'react';
import './App.scss';

const apiHost = process.env.REACT_APP_API_HOST;

function App() {
  const [now, setNow] = useState();

  async function onClick() {
    const res = await fetch(`${apiHost}/now`);
    const json = await res.json();
    setNow(json);
  }

  return (
    <div className="flex items-center">
      <button
        type="button"
        className="px-4 py-2 m-2 bg-black border-0 text-gray-100 rounded-3xl"
        onClick={onClick}
      >
        Present
      </button>
      {now && <p className="ml-6 text-xl text-gray-800">{now}</p>}
    </div>
  );
}

export default App;
