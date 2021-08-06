import Log from './Log'

const Logs = ({logs}) => {
    const today = new Date().toLocaleDateString('en-US')
    
    return (
        
   
        <div className="logs">
            {logs.filter(log=> log.day===today).map((todayslog)=> (
            <Log key={todayslog.id} log={todayslog}/>
            ))}
            
        </div>
    )
}

export default Logs
