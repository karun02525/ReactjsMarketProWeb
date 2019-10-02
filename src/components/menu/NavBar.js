import '../../css/menu.css'
import logo from '../../assets/img/logo.png'
import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'

export default class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state={
            uid:localStorage.getItem("uid"),
            token:localStorage.getItem("token"),
            name:localStorage.getItem("name"),
            mobile:localStorage.getItem("mobile"),
            user_avatar:`http://localhost:8081/api/authenticate/image-profile/${localStorage.getItem("user_avatar")}`
        }
    }

    logoutHandel() {
        localStorage.removeItem("token")
    }

    updateHandel() {
        alert("Update")
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
                <a href="/" className="navbar-brand">
                    <img src={logo} alt="" height='50' width='50' /> Winds Partner</a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#myMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="dropdown pmd-dropdown pmd-user-info ml-auto" id="myMenu">
                        <a href="javascript:void(0);" className="btn-user dropdown-toggle media align-items-center"
                            data-toggle="dropdown"
                            data-sidebar="true" aria-expanded="false">
                            <img className="mr-2 rounded-circle border border-warning" src={this.state.user_avatar}
                                width="50" height="50" alt="avatar" />
                            <h5 className="text-white">{this.state.name}</h5>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right mt-3" role="menu">

                            <NavLink className="dropdown-item bg-white text-primary" to="/">Edit Profile</NavLink>
                            <NavLink className="dropdown-item bg-white text-primary" to="/">Notification</NavLink>
                            <NavLink className="dropdown-item bg-white text-primary" to="/"
                             onClick={() => this.updateHandel()}
                            >Update Mobile </NavLink>
                            <NavLink className="dropdown-item bg-white text-primary" to="/login"
                               onClick={() => this.logoutHandel()}
                            >Logout </NavLink>

                        </ul>
                    </div>

            </nav>
        )
    }

}