import React from 'react';

export const CreateTask = React.memo(props => {
    console.log(props.completedError , props.completed);
    
    return (
        <div>
            <h2>CREATE TASK</h2>
            <form onSubmit={props.createTask}>
                <label>Description</label>
                <input type="text" id="desc" value={props.description} onChange={props.handleChange} placeholder="Enter Description" />
                {props.descriptionError && <span>Please Enter Description</span>}
                <label>Completed</label>
                <select id="completed" value={props.completed} onChange={props.handleChange}>
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
                {props.completedError && <span>Please Select Completed!</span>}
                <button type="submit">Create Task</button>
            </form>
        </div>
    )
}); 
