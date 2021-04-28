import React, {useState} from 'react'

function Form() {

    const [value,setValue] = useState("")

    return (
        <input value={value} onChange={e => setValue(e.target.value)}/>
    )
}

export default Form
