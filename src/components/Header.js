import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom'


const Header = ({title, subtitle, onAdd, showButtonChange}) => {
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            {location.pathname==='/' && (<Button  
            color={showButtonChange ? 'pink':'steelblue'}
            text={showButtonChange ? 'Close': 'Add'}
            onClick={onAdd}
            />)}
        </header>
    )
}

Header.defaultProps = {
    title: 'Coding Deep Work Time Tracker',
    subtitle: 'A simple app for tracking my time and work every day.' 
}


Header.protoTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

export default Header
