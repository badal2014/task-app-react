import React, { Component } from 'react';
import Home from './home';
import SingUp from './singUp';
import Task from './tasks/task';
import MyProfile from './myProfile';
import DeleteUser from './deleteUser';
import { Menu } from './menu';

export default class MainContainer extends Component {
    render() {
        let hash = window.location.hash.split('/')[1]
        return (
            <div>
                {sessionStorage.getItem('token') && <Menu />}
                {hash === "home" && <Home {...this.props}/>}
                {hash === "signUp" && <SingUp />}
                {hash === "task" && <Task />}
                {hash === "profile" && <MyProfile />}
                {hash === "deleteProfile" && <DeleteUser />}

            </div>
        )
    }
}
