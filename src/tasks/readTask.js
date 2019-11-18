import React from 'react';

export const ReadTask = (props) => {

    return (
        <div>
            <h2>READ TASKS</h2>
            {props.readTasks !== undefined ? props.readTasks.map((task, key) => (<div key={key}>
                <label>Description--</label><span> {task.description}</span>< br />
                <label>Completed  --</label><span>{task.completed.toString()}</span>
            </div>
            )) : null}

        </div>
    )
}; 
