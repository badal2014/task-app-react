import React, { Component } from 'react';
import { connect } from 'react-redux';
import { myProfile } from './redux/profile/action';
import CircularProgress from '@material-ui/core/CircularProgress';


class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : "",
            loader : false
        }
    }
    static getDerivedStateFromProps(props, state){
        if(props.myProfile.success){
            return {user : props.myProfile.data.data}
        }

        if(props.myProfile.loading){
            return{ loader : true}
        }
    }
    componentDidUpdate(prevprops, state) {
        if (this.props.myProfile.success === true) {
            this.setState({loader : false})
            this.props.myProfileApi()
        } 
    }
    componentDidMount() {
        let payload = "profile"
        this.props.myProfileApi(payload)
    }
    render() {
        const {loader} = this.state
        return (
            <div>
                <h3>Age</h3><h5>{this.state.user.age}</h5>
                <h3>Name</h3><h5>{this.state.user.name}</h5>
                <h3>Email</h3><h5>{this.state.user.email}</h5>
                {loader && <div className="my-spinner"><div className="bgBlur"></div><div className="loaderMain"><CircularProgress /></div></div>}
            </div>
        )
    }
}

const mapStateToProps = (e) => {
    return {
        myProfile: e.profile.myProfile
    }
}
const mapDispatchToProps = dispatch => {
    return {
        myProfileApi: (payload) => { dispatch(myProfile(payload)) },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyProfile)
