import Log from './Log'

const PastLogs = ({logs}) => {
    const today = new Date().toLocaleDateString('en-US')
    return (
        <div classname="pastlogs">
            {logs.filter(log=> log.day!==today).map((pastlogs) =>(
                <Log key={pastlogs.id} log={pastlogs}/> 
            ))}
        </div>
       
    )
        
}

PastLogs.defaultProps = {
    title: 'Past Logs', 
    subtitle: 'Keep on coding'
}

export default PastLogs
