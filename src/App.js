import {useState} from 'react'
import Header from './components/Header'
import Logs from './components/Logs'

function App() {
  const[logs, setLogs] = useState([
    {
      id: 1,
      date: "2021-06-15T12:17:46.260Z",
      input: "Lets see how it prints. "
    },
    {
      id: 2,
      date: "2021-06-17T12:48:34.692Z",
      input: "Spend an hour reviewing Big O, specifically logarithmic runtime. "
    },
    {
      id: 3,
      date: "2021-06-18T16:27:54.091Z",
      input: "Spent the morning reviewing Big O "
    },
  ])
  return (
    <div className="container">
      <Header />
      <Logs logs={logs} />
    </div>
  );
}

export default App;
