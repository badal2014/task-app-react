import React, { Component } from 'react'

export default class EditModal extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h4>Description</h4>
                <input type="text" id="desc" placeholder={this.props.newDesc} value={this.props.newDesc} onChange={this.props.handleValues}/>
                <h4>Completed</h4>
                <select id="complete" onChange={this.props.handleValues}>
                    <option value={this.props.editCompleted}>{this.props.editTask.completed.toString()}</option>
                    <option value={(!this.props.editTask.completed).toString()}>{(!this.props.editTask.completed).toString()}</option>
                </select>
                <button type="button" onClick={this.props.submitChange}>Save</button>
            </div>
        )
    }
}
