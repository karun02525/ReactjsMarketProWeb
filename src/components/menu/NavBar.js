import '../../css/menu.css'
import logo from '../../assets/img/logo.png'
import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'
import { URL } from '../../Constant/ApiConstant';

export default class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            uid: localStorage.getItem("uid"),
            token: localStorage.getItem("token"),
            name: localStorage.getItem("name"),
            mobile: localStorage.getItem("mobile"),
            user_avatar: URL.PROFILE_AVATAR_BASE_URL + localStorage.getItem("user_avatar")
        }
    }

    logoutHandel() {
        localStorage.removeItem("token")
    }

    changePasswordHandel(){
        alert("change password")
    }

    venderHandel() {
        alert("Vender")
    }

    updateHandel() {
        alert("Update")
    }

    render() {
        const { name, mobile, user_avatar } = this.state

        return (

            <nav className="mb-1 navbar navbar-expand-lg navbar-dark fixed-top">

                <span href="/" className="navbar-brand">
                    <img src={logo} alt="" height='50' width='70' /> Winds Partner</span>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myMenu"
                    aria-controls="myMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="myMenu">
                    <ul className="navbar-nav mr-auto pl-5 custom-nav"  >

                        <li className="nav-item"><NavLink exact activeClassName="selected" to="/dashboard" className="nav-link">Home</NavLink></li>
                        <li className="nav-item"><NavLink activeClassName="selected" to="/dashboard" className="nav-link">NearBy</NavLink></li>
                        <li className="nav-item"><NavLink activeClassName="selected" to="/dashboard" className="nav-link">Notification</NavLink></li>
                        <li className="nav-item"><NavLink activeClassName="selected" to="/dashboard" className="nav-link">Product</NavLink></li>
                        <li className="nav-item"><NavLink activeClassName="selected" to="/dashboard" className="nav-link">Contact</NavLink></li>
                    </ul>


                    <ul className="navbar-nav ml-auto nav-flex-icons">

                        <li className="nav-item text-white">
                            <h5 className="pr-2 ">{name}</h5>
                            <h5 className="pr-2 ">{mobile}</h5>
                        </li>

                        <li className="nav-item avatar">
                            <a className="nav-link p-0" href="#">
                                <img src={user_avatar}
                                    className="rounded-circle z-depth-0"
                                    alt="avatar image" height="45" />
                            </a>
                        </li>

                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" id="myMenu" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                            </span>
                            <div className="dropdown-menu dropdown-menu-right mt-2" role="menu">
                                <NavLink className="dropdown-item" to="/43">
                                    <i className="fas fa-user-edit"></i> {'  '}Edit Profile</NavLink>
                                <NavLink className="dropdown-item" to="/33">
                                    <i className="fas fa-bell"></i>{'   '}Notification</NavLink>
                              
                                <NavLink className="dropdown-item"
                                    to="/changepassword"
                                    onClick={() => this.changePasswordHandel()}>
                                     <i class="fas fa-unlock-alt"></i>
                                    {'   '}Change Password </NavLink>

                                <NavLink className="dropdown-item"
                                    to="/vender"
                                    onClick={() => this.venderHandel()}>
                                    <i class="fas fa-shopping-basket"></i>
                                    {'   '}For Vender </NavLink>


                                <div className="dropdown-divider"></div>
                                <NavLink className="dropdown-item"
                                    to="/login"
                                    onClick={() => this.logoutHandel()}>
                                    <i className="fas fa-power-off"></i>
                                    {'   '}Logout </NavLink>

                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

}