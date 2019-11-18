import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: ""
        }
    }
    componentDidMount() {
        if (sessionStorage.getItem('token') == null) {
            this.props.history.push('/')
        }
    }
    logOut = () => {
        sessionStorage.removeItem('token');
        console.log(this.props);
        
        this.props.history.push('/')
    }
   
    set = () => {
        this.setState({
            a: "a"
        })
    }
    render() {
        return (
            <div className="mainPage">
                <button type="button" onClick={this.logOut}>Logout</button>
            </div>
        )
    }
}
