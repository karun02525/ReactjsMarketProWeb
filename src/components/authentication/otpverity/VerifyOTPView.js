import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import '../../../css/styleAuthentication.css'



export default class VerifyOTPView extends Component {
    constructor() {
        super()
        this.state = {
            mobile: sessionStorage.getItem("mobile"),
            otp: '',
            isLoading: false
        }
    }



    apiCall = () => {
        axios.post('http://localhost:8081/api/authenticate/verify-otp', this.state)
            .then(res => {
                const jsonData = res.data
                Swal.fire({
                    type: 'success',
                    title: jsonData.message,
                    showConfirmButton: false,
                    timer: 3000
                })
                setTimeout(() => {
                    this.setState({
                        isLoading: jsonData.status
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
        if (this.state.otp=='') {
            alert("Please enter otp")
        } else if (this.state.otp.length !=6) {
            alert("Please enter valid otp")
        }else {
             this.apiCall()
        }
    }


    render() {
        const { isLoading, mobile, otp } = this.state

        console.log("Mobile Data : " + mobile)

        if (isLoading) {
            return <Redirect to='/register' />
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
                                                name='mobile'
                                                value={mobile} onChange={this.changeHandler}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label for="pws">OTP </label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-lock"></i></span>
                                            </div>
                                            <input type="password" className="form-control" id="pws"
                                                placeholder="Enter OTP"
                                                maxLength="6"
                                                name='otp' value={otp} onChange={this.changeHandler}
                                            />
                                        </div>
                                        <span>
                                            <i className="fa fa-eye-slash" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="links text-right"> <Link to="/forgot" className="text-primary ">Resend OTP</Link> </div>


                                    <div className="buttons text-center">
                                        <button className="btn btn-primary" type="submit">VERIFY OTP</button>
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



