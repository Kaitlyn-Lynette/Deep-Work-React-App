import {useState} from 'react'

const AddTask = () => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
}


const AddLog = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Log</label>
                <input type='text' placeholder='Add Task' />
            </div> 
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Task' />
            </div> 
            <input type='submit' value='Save log' className='btn btn-blick'/>
        </form>

       
    )
}

export default AddLog
