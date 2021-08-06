import {useState, useEffect} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AddLog from './components/AddLog'
import Logs from './components/Logs'
import {BrowserRouter as Router, Route} from 'react-router-dom'


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
  // const fetchLogs = async () => {
  //   const res = await fetch ('http://localhost:5000/logs')
  //   const data = await res.json()
  //   // console.log(data[11].day)
  //   for(var i = 0; i<data.length; i++) {
  //     // console.lsog(data[i])
  //     var date = data[i].day
  //     console.log(date)
  //   }
  //   // var str = data[11].day
  //   var dateStr = date.substring(0,date.indexOf(","))
  //   console.log(dateStr)
  //   const today = new Date().toLocaleDateString('en-US')
  //   console.log(today)
   
  //   return data
  // }

  const fetchLogs = async () => {
    const res = await fetch ('http://localhost:5000/logs')
    const data = await res.json()

    const datesArr = [];
      for(var i = 0; i<data.length; i++) {
      console.log(data[i])
      var date = data[i].day
      console.log(date)
      datesArr.push(date)
      console.log(datesArr)
    }

    var todaysDate =  new Date().toLocaleDateString('en-US')

    const todaysLogs = datesArr.filter(dateArr=> (dateArr.substring(0,dateArr.indexOf(","))===todaysDate))
    console.log(todaysLogs)

    return todaysLogs
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
    <Router>
    <div className="container">
      <Header 
      //Set the default state to not showing <AddLog> component?
      onAdd={()=> setShowAddLog(!showAddLog)}
      //The showButton prop allows for the button to toggle the <AddLog> component since we set to not to show
      showButtonChange={showAddLog} />
      {showAddLog && <AddLog onAdd={addLog}/>}
      <Route path='/pastlogs' 
      exact render={(props)=> (
        <>
      <Logs logs={logs} />
        </>
      )} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
