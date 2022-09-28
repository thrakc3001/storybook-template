import React, {useState} from 'react'

const Input = () => {

    const [input, setInput] = useState("");

    const handleInput = event => setInput(event.target.value)

    return (
        <div>
            <p>This is an input:</p>
            <input type="text" value={input} onChange={handleInput} />
        </div>
    )
}

export default Input;