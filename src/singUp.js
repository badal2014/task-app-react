import React, { Component } from 'react';
import { signUp } from './redux/signUp/action/index';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import SuccessModal from './modals/successModal';

class SingUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            age: null,
            password: "",
            loader: false,
            error: false,
            success : false,
            message : ""
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log(props.signUpData);
        if (props.signUpData.success) {
            return { loader: false , success : true , message : "User Created Successfully" }
        }
        if (props.signUpData.error) {
            return { loader: false, error: true, message: "some error found" }
        }
        if (props.signUpData.loading) {
            return { loader: true }
        }
        return null;
    }
    componentDidUpdate(prevprops, state) {
        console.log(prevprops.signUpData, this.props.signUpData);
        if (this.props.signUpData.success || this.props.signUpData.error) {
            this.setState({name : "" , email : "", age : null , password : ""})
            this.props.signUpUser()
        }

    }
    createUser = (e) => {
        e.preventDefault()
        let data = {
            name: this.state.name,
            email: this.state.email,
            age: this.state.age,
            password: this.state.password
        }
        this.props.signUpUser(data)
    }
    handleChange = (e) => {
        if (e.target.id === "name") {
            this.setState({ name: e.target.value })
        } else if (e.target.id === "email") {
            this.setState({ email: e.target.value })
        } else if (e.target.id === "age") {
            this.setState({ age: e.target.value })
        } else if (e.target.id === "password") {
            this.setState({ password: e.target.value })
        }
    }
    closeModal = () => {
        this.setState({ error: false , success : false })
    }
    loginScreen = (e) => {
        e.preventDefault()
        this.props.history.push('/')
    }
    render() {
        const { loader, error ,success} = this.state
        return (
            <div>
                <div className="col-md-12 height100vh signUpMain">
                    <div className="loginMain">
                        <div className="loginForm">

                            <div className="rightContent">
                                <h2>Lorem Ipsum is simply dummy text</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content<br />
                                    of a page when looking at its layout. The point of using Lorem Ipsum is that it has<br />
                                    a more-or-less normal</p>
                            </div>

                        </div>
                        <div className="loginRight">
                            <div className="formContent m-top-40">
                                {/* <i className="glyphicon glyphicon-lock"></i> */}
                                {/* <img src={userAddIcon} className="width100"/> */}
                                <h2 className="m-top-50">SIGN UP</h2>
                                <form onSubmit={this.createUser}>
                                    <div className="signUpForm">
                                        <input type="text" placeholder="Name" id="name" value={this.state.name} onChange={this.handleChange}/>

                                        <input type="text" id="age" onChange={this.handleChange} value={this.state.age } placeholder="Age" />

                                        <input type="email" id="email" onChange={this.handleChange} value={this.state.email} placeholder="Enter Email" />
                                        <input type="password" id="password" onChange={this.handleChange} value={this.state.password} placeholder="Enter Passowrd" />

                                    </div>
                                    <div className="acceptPolicy">
                                        <input type="checkbox" />I accept Terms & conditions<span className="checkmark"></span>
                                    </div>
                                    <button className="m-top-30" type="submit">Sign Up</button>
                                </form>
                                    <div className="haveAccount" onClick={this.loginScreen} ><a >You Have Account</a></div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <form onSubmit={this.createUser}>
                    <h1>Sign Up</h1>
                    <label>Name</label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label>email</label>
                    <input type="email" id="email" onChange={this.handleChange} />
                    <label>age</label>
                    <input type="text" id="age" onChange={this.handleChange} />
                    <label>Password</label>
                    <input type="password" id="password" onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
                <p>Have an account</p>
                <button type="button" onClick={() => this.props.history.push("/")}>Login</button> */}
                {loader && <div className="my-spinner"><div className="bgBlur"></div><div className="loaderMain"><CircularProgress /></div></div>}
                {error && <SuccessModal message={this.state.message} closeModal={this.closeModal} />}
                {success && <SuccessModal message={this.state.message} closeModal={this.closeModal} />}


            </div>
        )
    }
}
const mapStateToProps = (e) => {
    return {
        signUpData: e.signUp.signUp
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signUpUser: (payload) => { dispatch(signUp(payload)) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingUp);