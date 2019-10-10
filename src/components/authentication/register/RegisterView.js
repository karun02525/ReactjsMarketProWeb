import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {URL_API} from '../../../Constant/ApiConstant';
import axios from 'axios'
import Swal from 'sweetalert2'
import '../../../css/styleAuthentication.css'



export default class RegisterView extends Component {
    constructor() {
        super()
        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            mobile: sessionStorage.getItem("mobile"),
            first_name: '',
            last_name: '',
            password: '',
            cnf_password: '',
            gender: 'Male',
            loggedIn
        }
    }

    apiCall = () => {
        axios.post(URL_API.CreateUSER, this.state)
            .then(res => {
                const jsonData = res.data
                sessionStorage.removeItem("mobile");
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

    setGender = e => {
        this.setState({
            gender: e.target.value
        })
    }

    responseDataParse(jsonData){
        console.log("Response Data : "+JSON.stringify(jsonData))
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

    submitHandler = e => {
        e.preventDefault()
      
        if (this.state.first_name === '') {
            alert("Please enter first name")
        } else if (this.state.last_name === '') {
            alert("Please enter last name")
        } else if (this.state.lname === '') {
            alert("Please enter last name")
        } else if (this.state.password === '') {
            alert("Please enter password")
        } else if (this.state.password.length < 8 || this.state.password.length > 16) {
            alert("Password must be equal or grater than 8 characters and less than 16 characters")
        } else if (this.state.password !== this.state.cnf_password) {
            alert("confirm password not match")
        } else {
            this.apiCall()
        }
    }


    render() {
        const { loggedIn, mobile, first_name, last_name, password, cnf_password } = this.state

        if (loggedIn) {
            return <Redirect to='/dashboard' />
        }

        if (mobile == null) {
             return <Redirect to='/otp' />
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
                                    <br></br><br></br>
                                    <h5 className="font-weight">CREATE ACCOUNT</h5>
                                    <hr></hr>
                                </div>

                                <form className='form' onSubmit={this.submitHandler}>

                                    <div className="form-group">
                                        <label for="usr">Mobile Number </label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-mobile-alt"></i></span>
                                            </div>
                                            <input type="text" className="form-control" id="ur" disabled
                                                placeholder="Enter Mobile Number"
                                                maxLength="10"
                                                name='mobile' value={mobile} onChange={this.changeHandler}
                                            />
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <label for="usr">First Name </label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-user"></i></span>
                                            </div>
                                            <input type="text" className="form-control" id="ur"
                                                placeholder="Enter first name"
                                                maxLength="30"
                                                name='first_name' value={first_name} onChange={this.changeHandler}
                                            />
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <label for="usr">Last Name </label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-user"></i></span>
                                            </div>
                                            <input type="text" className="form-control" id="ur"
                                                placeholder="Enter last name"
                                                maxLength="30"
                                                name='last_name' value={last_name} onChange={this.changeHandler}
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

                                    <div className="form-group">
                                        <label for="cnfpws">Confirm Password </label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-lock"></i></span>
                                            </div>
                                            <input type="password" className="form-control" id="cnfpws"
                                                placeholder="Enter Confirm Password"
                                                maxLength="16"
                                                name='cnf_password' value={cnf_password} onChange={this.changeHandler}
                                            />
                                        </div>
                                        <span>
                                            <i className="fa fa-eye-slash" aria-hidden="true"></i>
                                        </span>
                                    </div>

                                    <div>
                                        <label htmlFor="">Gender</label><br></br>
                                        <input type="radio" onClick={this.setGender} value="Male" defaultChecked name="gender" /> Male
                                        <input type="radio" onClick={this.setGender} value="Female" name="gender" className="ml-2" /> Female

                                     </div>


                                    <div className="buttons text-center">
                                        <button className="btn btn-primary" type="submit">CREATE ACCOUNT</button>
                                    </div>

                                    <div className="midas text-center">
                                        <hr></hr>
                                        <span>Already a Member?<Link to="/login" className="text-primary">Login</Link> </span>
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