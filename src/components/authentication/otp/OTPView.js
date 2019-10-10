import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {URL_API} from '../../../Constant/ApiConstant';
import axios from 'axios'
import Swal from 'sweetalert2'
import '../../../css/styleAuthentication.css'



export default class OTPView extends Component {


    state = {
        mobile: '',
        is_create:-1
    }


    apiCall = () => {
        axios.post(URL_API.SendOTP, this.state)
            .then(res => {
                const jsonData = res.data
                sessionStorage.setItem("mobile", this.state.mobile)

                Swal.fire({
                    type: 'success',
                    title: jsonData.message,
                    showConfirmButton: false,
                    timer: 3000
                })
                setTimeout(() => {
                    this.setState({
                        is_create:jsonData.data.is_create
                    })
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
        
        if (this.state.mobile=='') {
            alert("Please enter mobile number")
        } else if (this.state.mobile.length !=10) {
            alert("Please enter valid mobile number")
        }else {
             this.apiCall()
        }
    }


    render() {
        const {mobile,is_create } = this.state

        if (is_create==0) {
            return <Redirect to='/verifyotp' />
        }

        if (is_create==1) {
            return <Redirect to='/register' />
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
                                            <input type="text" className="form-control" id="ur"
                                                placeholder="Enter Mobile Number"
                                                maxLength="10"
                                                name='mobile' value={mobile} onChange={this.changeHandler}
                                            />
                                        </div>
                                    </div>

                                    <div className="buttons text-center">
                                        <button className="btn btn-primary" type="submit">SEND OTP</button>
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



