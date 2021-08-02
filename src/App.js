import {useState, useEffect} from 'react'
import Header from './components/Header'
import AddLog from './components/AddLog'
import Logs from './components/Logs'

function App() {
  const [showAddLog, setShowAddLog] = useState(false)
  const[logs, setLogs] = useState([])

  useEffect(() => {
    const getLogs = async () => {
      const logsFromServer = await fetchLogs()
      setLogs(logsFromServer)
    }
    getLogs()
  },[])

  //Fetch logs 
  const fetchLogs = async () => {
    const res = await fetch ('http://localhost:5000/logs')
    const data = await res.json()
    console.log(data)
    return data
  }

  //Add Log
  // const addLog = (log) => {
  //   const id = Math.floor(Math.random()*1000) +1
  //   const newLog = {id, ...log}
  //   console.log(newLog)
  //   setLogs([...logs, newLog])
  // }

  const addLog = async (log) => {
    const res = await fetch ('http://localhost:5000/logs', {
      method: 'POST', 
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(log)
    })

    const data = await res.json()

    setLogs([...logs, data])
  }

  return (
    <div className="container">
      <Header 
      //Set the default state to not showing <AddLog> component?
      onAdd={()=> setShowAddLog(!showAddLog)}
      //The showButton prop allows for the button to toggle the <AddLog> component since we set to not to show
      showButtonChange={showAddLog} />
      {showAddLog && <AddLog onAdd={addLog}/>}
      <Logs logs={logs} />
    </div>
  );
}

export default App;
