import React, { Component } from 'react'
import {connect} from 'react-redux';
import {deleteUser} from './redux/deleteUser/action';
import SuccessModal from './modals/successModal';
import { CircularProgress } from '@material-ui/core';

class DeleteUser extends Component {

constructor(props){
    super(props);
    this.state ={
        success : false,
        message : "",
        loader : false,
        error : false
    }
}
static getDerivedStateFromProps(props, state) {
    if(props.userStatus.loading){
        return {loader : true}
    }else if(props.userStatus.error){
        return {error : true , loader :false , message : props.userStatus.message.error.message}
    }
    return null 
}
componentDidUpdate(prevprops, state){
    if(this.props.userStatus.success){
        this.props.deleteUser();
        this.setState({success : true , loader : false , message : "User Deleted Successfully"})
    }else if(this.props.userStatus.error){
        this.props.deleteUser();
    }
    
}
deleteMyProfile = () => {
    let payload = "deleteMe"
    this.props.deleteUser(payload)
}
closeModal = () => {
    this.props.history.push('/')
    this.setState({
        success : false,
        error : false
    })
}
closeMe = () => {
    this.setState({
        success : false,
        error : false
    })
}
    render() {
        const {success , loader ,error} = this.state
        return (
            <div>
                <button type="button" onClick={this.deleteMyProfile}>Delete My Profile</button>
                {/* {success && "User Deleted Successfully"} */}
                {loader && <div className="my-spinner"><div className="bgBlur"></div><div className="loaderMain"><CircularProgress /></div></div>}

                {success ? <SuccessModal closeMe={this.closeMe} message ={this.state.message} closeModal={this.closeModal}/>
                : error ?<SuccessModal closeMe={this.closeMe} message ={this.state.message} closeModal={this.closeModal}/> : null}
            </div>
        )
    }
}

const mapStateToProps = (e) => {
    return {
        userStatus: e.userStatus.deleteUser
    }
}
const mapDispatchToProps = dispatch => {
    return {
        deleteUser: (payload) => { dispatch(deleteUser(payload)) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DeleteUser)


