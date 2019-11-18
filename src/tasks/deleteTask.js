import React from 'react';

export const DeleteTask = (props) => {
    return (
        <div>
            <h2>DELETE TASK</h2>
            {props.readTasks !== undefined ? props.readTasks.map((task, key) => (<div key={key}>
                <label>Description--</label> <span> {task.description}</span>< br />
                    <label>Completed  --</label> <span>{task.completed.toString()}</span>
                    <button type="button" id={task._id} onClick={props.deleteTask}>Delete</button>
            </div>
                )) : null}
            </div>
            )
}; 
