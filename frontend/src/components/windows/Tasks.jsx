import React, { useState, useEffect } from 'react';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await fetch('http://127.0.0.1:8000/tasks/'); // Use the full URL for Django server
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new TypeError("Oops, we haven't got JSON!");
        }
        const data = await response.json();
        setTasks(data);
    };
    return (
        <>
        <ul>
            {tasks.map(task => (
                <li key={task.id}>{task.title}</li> // Adjust based on your task object structure
            ))}
        </ul>
        </>
    );
}

export default Tasks