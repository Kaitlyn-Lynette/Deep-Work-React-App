import {useState} from 'react'
import {useLocation} from 'react-router-dom'


const AddLog = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const location = useLocation ()

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }
        onAdd({text, day})

        setText('')
        setDay('')
    }

    return (
        <>
        {location.pathname==='/' && (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Log</label>
                <input 
                type='text' 
                placeholder='Add Log' 
                value={text} 
                onChange={(e)=>setText(e.target.value)} />
            </div> 
            <div className='form-control'>
                <label>Day & Time</label>
                <input 
                type='text' 
                placeholder='Add Time & Day'
                value={day}
                onChange={(e)=>setDay(e.target.value)} />
            </div> 
            <input  
                type='submit' 
                className='btn btn-block'
                value='Save log'/>
        </form> )}
        </>
    )
}

export default AddLog
