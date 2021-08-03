import {Link} from 'react-router-dom'
import Button from './Button'

const PastLogs = () => {
    return (
        <div>
            <Link to='/'><Button text={'Go Back'}/></Link>
        </div>
    )
}

PastLogs.defaultProps = {
    title: 'Past Logs', 
    subtitle: 'Keep on coding'
}

export default PastLogs
``