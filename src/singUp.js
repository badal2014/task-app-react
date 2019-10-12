import React, { Component } from 'react';
import {signUp} from './redux/signUp/action/index';
import { connect } from 'react-redux';

class SingUp extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            email : "",
            age : 0,
            password:"",
        }
    }
    createUser = (e) => {
        e.preventDefault()
        let data = {
            name : this.state.name,
            email : this.state.email,
            age: this.state.age,
            password:this.state.password
        }
        console.log(data)
        this.props.dispatch(signUp(data))
    }
    handleChange = (e) =>{
        if(e.target.id == "name"){
            this.setState({name : e.target.value})
        }else if(e.target.id == "email"){
            this.setState({email : e.target.value})
        }else if(e.target.id == "age"){
            this.setState({age : e.target.value})
        }else if(e.target.id == "password"){
            this.setState({password : e.target.value})
        }
    } 
    render() {
        return (
            <div>
                <form onSubmit={this.createUser}>
                    <h1>Sign Up</h1>
                    <label>Name</label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <label>email</label>
                    <input type="email" id="email" onChange={this.handleChange}/>
                    <lanel>age</lanel>
                    <input type="text" id="age" onChange={this.handleChange}/>
                    <label>Password</label>
                    <input type="password" id="password" onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </form>
                <p>Have an account</p>
                <button type="button" onClick={() => this.props.history.push("/home")}>Login</button>
            </div>
        )
    }
}
const mapStateToProps = (e) => {
    console.log("signUpData", e);
    return {
        signUpData: e
    }
}
export default connect(mapStateToProps)(SingUp);