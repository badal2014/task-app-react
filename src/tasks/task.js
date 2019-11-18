import React, { Component } from 'react'
import { CreateTask } from './createTask';
import { ReadTask } from './readTask';
import { UpdateTask } from './updateTask';
import { connect } from 'react-redux';
import { newTask, readTask, updateTask, deleteTask } from '../redux/tasks/action/index';
import EditModal from '../editModal';
import { DeleteTask } from './deleteTask';
import DeleteUser from '../deleteUser';
import SuccessModal from '../modals/successModal';
import CircularProgress from '@material-ui/core/CircularProgress';


class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            crud: "create",
            description: "",
            completed: true,
            readTasks: [],
            edit: false,
            editTask: null,
            newDesc: "",
            complete: false,
            descriptionError: false,
            completedError: false,
            message : "",
            loader : false,
        }
    }
    componentDidMount() {
        if (sessionStorage.getItem('token') == null) {
            this.props.history.push('/')
        }
        return null
    }
    static getDerivedStateFromProps(props, state) {
        if (props.task.readTask.success) {
            return { readTasks: props.task.readTask.data.data }
        }

        if(props.task.createTask.success){
            return{complete : true, message : "Task Completed Successfully"}
        }
        

        if(props.task.createTask.loading ||props.task.deleteTask.loading || props.task.readTask.loading || props.task.createTask.loading || props.task.updateTask.loading ){
            return {loader : true}
        }
        console.log(props.task);
        return null
        
    }
    componentDidUpdate(prevprops, state) {
        if (this.props.task.readTask.success === true) {
            this.setState({loader : false})
            this.props.readTask()
        } else if (this.props.task.updateTask.success === true) {
            this.props.updateTask()
            let payload = "asd"
            this.props.readTask(payload)
        } 
        if(this.props.task.createTask.success == true){
            this.setState({loader : false})
            this.props.newTask()
        }
        if(this.props.task.deleteTask.success){
            this.setState({loader : false})
            this.props.deleteTaskApi()
            let payload = "asd"
            this.props.readTask(payload)
        }else if(this.props.task.deleteTask.error){
            this.setState({loader : false})
            this.props.deleteTaskApi()
        }
    }
    handleChange = (e) => {
        if (e.target.id === "desc") {
            this.setState({
                description: e.target.value
            })
        } else if (e.target.id === "completed") {
            var value = e.target.value
            this.setState({
                completed:  value == "true" ? true : false
            })
            console.log(value == "true" ? true : false , this.state.completed == "");
        }
    }
    handleError = () => {
        if (this.state.description == null) {
            this.setState({
                descriptionError: true
            })
        } else {
            this.setState({
                descriptionError: false
            })
        }
        if (this.state.completed == null) {
            this.setState({
                completedError: true
            })
        } else {
            this.setState({
                completedError: false
            })
        }
    }
    createTask = (e) => {
        e.preventDefault();
        this.handleError()
        setTimeout(() => {
            if (this.state.descriptionError == false && this.state.completedError == false) {

                let payload = {
                    description: this.state.description,
                    completed: this.state.completed
                }
                this.props.newTask(payload)
                this.setState({
                    completed : "",
                    description : ""
                })
            }
        }, 100)
       

    }


    editTask = (e) => {
        this.setState({
            edit: true,
            editTask: e,
            newDesc: e.description,
            complete: e.completed.toString()
        })
    }

    handleValues = (e) => {
        if (e.target.id == "desc") {
            this.setState({
                newDesc: e.target.value
            })
        } else if (e.target.id == "complete") {
            this.setState({
                complete: JSON.parse(e.target.value)
            })
        }
    }

    submitChange = () => {
        let payload = {
            id: this.state.editTask._id,
            description: this.state.newDesc,
            completed: JSON.parse(this.state.complete)
        }
        this.setState({ edit: false })
        this.props.updateTask(payload)
    }

    deleteTask = (e) => {
        let payload = {
            id: e.target.id
        }
        this.props.deleteTaskApi(payload)
    }
    handleCrud = (e) => {
        var id = e.target.id
        if (id == "delete") {
            let payload = "asd"
            this.props.readTask(payload)
            this.setState({ crud: "delete" })
        } else if (id == "update") {
            let payload = "asd"
            this.props.readTask(payload)
            this.setState({ crud: "update" });
        } else if (id == "read") {
            let payload = "asd"
            this.props.readTask(payload)
            this.setState({ crud: "read" })
            this.setState({ crud: "read" });
        }
    }
    closeSuccess = () => {
        console.log("in close");
        
        this.setState({complete : false})
    }
    render() {
        const { crud, edit , complete , loader} = this.state
        return (
            <div>
                <h5 onClick={() => this.setState({ crud: "create" })}>Create Task</h5>
                <h5 id="read" onClick={this.handleCrud}>Read Tasks</h5>
                <h5 id="update" onClick={this.handleCrud}>Update Task</h5>
                <h5 id="delete" onClick={this.handleCrud}>Delete Task</h5>

                <div className="createTask">
                    {crud === "create" ? <CreateTask {...this.state} {...this.props} handleChange={this.handleChange} createTask={this.createTask} />
                        : crud === "read" ? <ReadTask {...this.state} {...this.props} /> : crud === "update" ? <UpdateTask {...this.state} {...this.props} editTask={this.editTask} />
                            : crud === "delete" ? <DeleteTask {...this.state} {...this.props} deleteTask={this.deleteTask} />
                                : crud === "deleteUser" ? <DeleteUser {...this.state} {...this.props} /> : null}
                </div>
                {edit && <EditModal {...this.state} {...this.props} handleValues={this.handleValues} submitChange={this.submitChange} />}
                {console.log(this.state.complete)}
                {complete && <SuccessModal {...this.state} closeModal={this.closeSuccess}/>}
                {loader && <div className="my-spinner"><div className="bgBlur"></div><div className="loaderMain"><CircularProgress /></div></div>}
            </div>
        )
    }
}

const mapStateToProps = (e) => {
    return {
        task: e.task
    }
}
const mapDispatchToProps = dispatch => {
    return {
        newTask: (payload) => { dispatch(newTask(payload)) },
        readTask: (payload) => { dispatch(readTask(payload)) },
        updateTask: (payload) => { dispatch(updateTask(payload)) },
        deleteTaskApi: (payload) => { dispatch(deleteTask(payload)) },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Task)