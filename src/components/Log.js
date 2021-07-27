const Log = ({log}) => {
    return (
        <div className='log'>
            <h3>{log.text}</h3>
            <p>{log.day}</p>
        </div>
    )
}

export default Log
