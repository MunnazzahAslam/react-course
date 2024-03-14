import { useState } from "react";

function Input() {

    const [name, setName] = useState('Default');
    const [comment, setComment] = useState('Default Comment');
    const [status, setStatus] = useState('Inactive');
    const [option, setOption] = useState('COD');

    return(
        <div>
            <p>{name}</p>
            <input value={name} onChange={e => setName(e.target.value)} />
            
            <p>{comment}</p>
            <textarea value={comment} onChange={e => setComment(e.target.value)} />

            <p>{status}</p>
            <select value={status} onChange={e => setStatus(e.target.value)}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
            </select>

            <p>{option}</p>
            <label>
                <input type="radio" value="COD" checked={option === 'COD'} onChange={(e) => setOption(e.target.value)}/>
                Cash on delivery
            </label>
            <br/>
            <label>
                <input type="radio" value="Bank" checked={option === 'Bank'} onChange={(e) => setOption(e.target.value)} />
                Bank
            </label>
        </div>
    )
}

export default Input;