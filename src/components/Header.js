import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, subtitle}) => {
    const onClick = ()=> {
        console.log('click')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <Button text='Add' onClick={onClick}></Button>
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
