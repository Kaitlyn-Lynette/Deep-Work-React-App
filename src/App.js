import {useState} from 'react'
import Header from './components/Header'
import AddLog from './components/AddLog'
import Logs from './components/Logs'

function App() {
  const [showAddLog, setShowAddLog] = useState(false)
  const[logs, setLogs] = useState([
    {
      id: 1,
      day: "2021-06-15T12:17:46.260Z",
      text: "Lets see how it prints. "
    },
    {
      id: 2,
      day: "2021-06-17T12:48:34.692Z",
      text: "Spend an hour reviewing Big O, specifically logarithmic runtime. "
    },
    {
      id: 3,
      day: "2021-06-18T16:27:54.091Z",
      text: "Spent the morning reviewing Big O "
    },
  ])

  //Add Log
  const addLog = (log) => {
    const id = Math.floor(Math.random()*1000) +1
    const newLog = {id, ...log}
    console.log(newLog)
    setLogs([...logs, newLog])
  }

  return (
    <div className="container">
      <Header 
      onAdd={()=> setShowAddLog(!showAddLog)}
      showAdd={showAddLog} />
      {showAddLog && <AddLog onAdd={addLog}/>}
      <Logs logs={logs} />
    </div>
  );
}

export default App;
