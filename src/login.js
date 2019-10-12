import React, { Component } from 'react'
import {loginData} from './redux/login/action/index';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    handleChange = (e) => {
        var id = e.target.id
        if (id == "email") {
            this.setState({
                email: e.target.value
            })
        } else if (id == "password") {
            this.setState({
                password: e.target.value
            })
        }
    }
    // componentWillMount(nextprops){
    //     console.log(nextprops)
    // }
    componentWillReceiveProps(nextprops){
        console.log(nextprops)
        // console.log(nextprops.loginData.success == true)
        if(nextprops.loginData.success == true){
            this.props.history.push("/home")
        }
        // if(nextprops.data != undefined){
        // }
    }
    submit = () => {
        let payload = {
            email : this.state.email,
            password : this.state.password
        }
        // this.props.dispatch(loginData(payload))
        this.props.loginDat(payload)
    }
    render() {
        console.log("in login")
        return (
            <div>
                <h1>Login Screen</h1>
                <label>Email</label>
                <input type="text" id="email" value={this.state.email} onChange={this.handleChange} />
                <label>Password</label>
                <input type="password" id="password" value={this.state.password} onChange={this.handleChange} />
                <button type="button" onClick={this.submit}>Login</button>
                <span onClick={() => this.props.history.push("/signUp")}>Not Have Login</span>
            </div>
        )
    }
}
const mapStateToProps = (e) => {
    console.log("badal", e);
    return {
        loginData: e.login.login
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loginDat: () => {
        dispatch(loginData())
      }
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(Login);