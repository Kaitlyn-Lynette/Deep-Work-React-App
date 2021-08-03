import Button from './Button'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
const Footer = () => {
    const location = useLocation ()
    return (
        <footer>
            {location.pathname==='/'&& (<Link to='/pastlogs'><Button text={'Past Logs'}/></Link>)}
            {location.pathname==='/pastlogs'&& (<Link to='/'><Button text={'Go Back'}/></Link>)}
            <p>Copyright &copy; 2021</p>
            
        </footer>
    )
}

export default Footer
