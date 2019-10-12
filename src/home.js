import React, { Component } from 'react'

export default class Home extends Component {

    componentWillMount(nextprops){
              console.log(sessionStorage.getItem('token'))
        if(sessionStorage.getItem('token') == null){
            this.props.history.push('/')
        }else{
            console.log("nextPROEPE" , nextprops)
        }
    }

    logOut = () => {
        console.log("in log out")
        sessionStorage.removeItem('token');
        this.props.history.push('/')
    }
    render() {
        console.log("in home page")
        return (
            <div>
                <h1>HOME</h1>
                <h5>Create Task</h5>
                <h5>Read Task</h5>
                <h5>Update Task</h5>

                <button type="button" onClick={this.logOut}>Logout</button>
            </div>
        )
    }
}
