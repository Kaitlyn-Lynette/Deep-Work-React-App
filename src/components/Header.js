import PropTypes from 'prop-types'

const Header = ({title, subtitle}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
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
