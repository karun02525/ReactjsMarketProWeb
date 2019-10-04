import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import {URL} from '../../../Constant/ApiConstant';
import axios from 'axios'
import Swal from 'sweetalert2'
import '../../../css/styleAuthentication.css'



export default class LoginView extends Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            mobile: '',
            password: '',
            loggedIn
        }
    }

    apiCall = () => {
        axios.post(URL.LOGIN, this.state)
            .then(res => {
                const jsonData = res.data
                Swal.fire({
                    type: 'success',
                    title: jsonData.message,
                    showConfirmButton: false,
                    timer: 3000
                })
                setTimeout(() => {
                    this.responseDataParse(jsonData.data)
                }, 3000);



            }).catch(error => {
                if (error.response) {
                    Swal.fire(error.response.data.message)
                }
                console.log(error)
            })
    }


    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()

        if (this.state.mobile === '') {
            alert("Please enter mobile number")
        } else if (this.state.mobile.length !== 10) {
            alert("Please enter valid mobile number")
        } else if (this.state.password === '') {
            alert("Please enter password")
        } else if (this.state.password.length < 8 || this.state.password.length > 16) {
            alert("Password must be equal or grater than 8 characters and less than 16 characters")
        } else {
            this.apiCall()
        }
    }

    responseDataParse(jsonData){
        const uid=jsonData.uid
        const token=jsonData.token
        const name=jsonData.first_name +" "+jsonData.last_name
        const mobile=jsonData.mobile
        const user_avatar=jsonData.user_avatar

        localStorage.setItem("uid", uid)
        localStorage.setItem("token", token)
        localStorage.setItem("name", name)
        localStorage.setItem("mobile", mobile)
        localStorage.setItem("user_avatar", user_avatar)

         this.setState({
            loggedIn: true
         })
    }


    render() {
        const { loggedIn, mobile, password } = this.state

        if (loggedIn) {
            return <Redirect to='/dashboard' />
        }

        return (
            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-6">
                        </div>

                        <div className="col-md-5 col-sm-6">
                            <div className="wrapper align-center">
                                <div className="text-center">
                                    <img src={require("../../../assets/img/logo.png")} width="30%" height="30%" class="center" />
                                    <h5 className="font-weight-bold">Login</h5>
                                    <hr></hr>
                                </div>

                                <form className='form' onSubmit={this.submitHandler}>
                                    <div className="form-group">
                                        <label for="usr">Mobile Number </label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-mobile-alt"></i></span>
                                            </div>
                                            <input type="text" className="form-control" id="ur"
                                             placeholder="Enter Mobile Number"
                                             maxLength="10"
                                                name='mobile' value={mobile} onChange={this.changeHandler}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label for="pws">Password </label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-lock"></i></span>
                                            </div>
                                            <input type="password" className="form-control" id="pws" 
                                            placeholder="Enter Your Password"
                                            maxLength="16"
                                                name='password' value={password} onChange={this.changeHandler}
                                            />
                                        </div>
                                        <span>
                                            <i className="fa fa-eye-slash" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="links text-right"> <Link to="/forgot" className="text-primary ">Forgot Password?</Link> </div>

                                    <div className="buttons text-center">
                                        <button className="btn btn-primary" type="submit">LOGIN</button>
                                    </div>
                                    <div className="midas text-center">
                                        <hr></hr>
                                        <span>You Don't have an account?<Link to="/otp" className="text-primary">Register Here</Link> </span>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}



