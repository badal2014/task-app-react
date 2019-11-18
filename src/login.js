import React, { Component } from 'react'
import { loginData } from './redux/login/action/index';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            loader: false
        }
    }

    // UNSAFE_componentWillMount(){
    //     if (sessionStorage.getItem('token') == null) {
    //         this.props.history.push('/')
    //     }
    // }
    handleChange = (e) => {
        var id = e.target.id
        if (id === "email") {
            this.setState({
                email: e.target.value
            })
        } else if (id === "password") {
            this.setState({
                password: e.target.value
            })
        }
    }
    // componentWillMount(nextprops){
    // }
    UNSAFE_componentWillReceiveProps(nextprops) {
        if (nextprops.loginData.success === true) {
            this.props.history.push("/home")
            this.setState({ loader: false })
            this.props.loginDat()
        }

        if (nextprops.loginData.loading) {
            this.setState({ loader: true })
        } else if (nextprops.loginData.error) {
            this.setState({ loader: false })
            this.props.loginDat()
        }

    }
    submit = () => {
        let payload = {
            email: this.state.email,
            password: this.state.password
        }
        // this.props.dispatch(loginData(payload))
        this.props.loginDat(payload)
    }
    render() {
        const { loader } = this.state
        return (
            <div>
                <div className="col-md-12 height100vh">
                    <div className="loginMain loginScreen">
                        <div className="loginForm">
                            <div className="formContent m-top-80">
                                <i className="glyphicon glyphicon-lock"></i>
                                <h2 className="m-top-50">LOG IN</h2>
                                <input type="text" id="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter Email" />
                                <input type="password" id="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter Passowrd" />
                                <button className="m-top-30" type="button" onClick={this.submit}>LOGIN</button>
                                <span className="forgetPass" onClick={() => this.props.history.push("/signUp")}>Forget Password</span>
                                <span className="noAccount">Have No Account Yet?</span>
                            </div>
                        </div>
                        <div className="loginRight">
                            <div className="rightContent">
                                <h2>Welcome To The Task Management System</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content<br />
                                    of a page when looking at its layout. The point of using Lorem Ipsum is that it has<br />
                                    a more-or-less normal</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <h1>Login Screen</h1>
                <label>Email</label>
                <input type="text" id="email" value={this.state.email} onChange={this.handleChange} />
                <label>Password</label>
                <input type="password" id="password" value={this.state.password} onChange={this.handleChange} />
                <button type="button" onClick={this.submit}>Login</button>
                <span onClick={() => this.props.history.push("/signUp")}>Not Have Login</span> */}
                {loader && <div className="my-spinner"><div className="bgBlur"></div><div className="loaderMain"><CircularProgress /></div></div>}
            </div>
        )
    }
}
const mapStateToProps = (e) => {
    return {
        loginData: e.login.login
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loginDat: (payload) => { dispatch(loginData(payload)) }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);