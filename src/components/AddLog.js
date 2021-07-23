import {useState} from 'react'


const AddLog = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')


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
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Log</label>
                <input 
                type='text' 
                placeholder='Add Task' 
                value={text} 
                onChange={(e)=>setText(e.target.value)} />
            </div> 
            <div className='form-control'>
                <label>Day & Time</label>
                <input 
                type='text' 
                placeholder='Add Task'
                value={day}
                onChange={(e)=>setDay(e.target.value)} />
            </div> 
            <input  
                type='submit' 
                className='btn btn-block'
                value='Save log'/>
        </form>

       
    )
}

export default AddLog
