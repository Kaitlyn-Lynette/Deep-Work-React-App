import {Link} from 'react-router-dom'

const PastLogs = ({title, subtitle}) => {
    return (
        <div>
            {/* <h1>{title}</h1>
            <h2>{subtitle}</h2> */}
            <Link to='/'>Go Back</Link>
        </div>
    )
}

PastLogs.defaultProps = {
    title: 'Past Logs', 
    subtitle: 'Keep on coding'
}

export default PastLogs
