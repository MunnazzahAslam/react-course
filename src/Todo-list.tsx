import { useState } from 'react';
function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        setTasks(t => ([...t, newTask]));
        setNewTask('');
    }

    const handleDeleteTask = (index: number) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    const moveTaskUp = (index: number) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    const moveTaskDown = (index: number) => {
        const updatedTasks = [...tasks];

        if (index < updatedTasks.length - 1) {
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    const handleChangeInput = (event) => {
        setNewTask(event.target.value);
    }

    return (
        <div className='todo-list'>
            <input type="text" placeholder='Enter a new task' value={newTask} onChange={handleChangeInput} />
            <button disabled={!newTask} onClick={handleAddTask}>Add Task</button>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button onClick={() => handleDeleteTask(index)}>Delete</button>
                        <button onClick={() => moveTaskUp(index)}>Move Up</button>
                        <button onClick={() => moveTaskDown(index)}>Move Down</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default TodoList;