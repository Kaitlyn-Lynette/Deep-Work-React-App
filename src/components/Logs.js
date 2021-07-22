import Log from './Log'

const Logs = ({logs}) => {
    
    return (
   
        <div className="logs">
            {logs.map((log)=> (
            <Log key={log.id} log={log}/>
            ))}
        </div>
    )
}

export default Logs
