import '../../css/menu.css'
import logo from '../../assets/img/logo.png'
import { NavLink ,Redirect} from 'react-router-dom'
import React, { Component } from 'react'
import { URL_API } from '../../Constant/ApiConstant';
import PopupSubmit from '../vender/PopupSubmit'
import axios from 'axios'
import Swal from 'sweetalert2'
import EditProfilePopupView from '../menu/EditProfilePopupView'




export default class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            uid: localStorage.getItem("uid"),
            token: localStorage.getItem("token"),
            fname: localStorage.getItem("fname"),
            lname: localStorage.getItem("lname"),
            mobile: localStorage.getItem("mobile"),
            email:'',
            gender:'',
            dob:'',
            user_avatar:'',
            vender_id:'',
            category_id:'',
            category_name:'',
            is_verify:-1,
            isEdit:false
        }
    }


   // user_avatar: URL.PROFILE_AVATAR_BASE_URL + localStorage.getItem("user_avatar"),


    logoutHandel() {
        localStorage.removeItem("token")
    }

    changePasswordHandel(){
        Swal.fire({
            title: "Your veri",
            type: 'info',
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Done!',
          })
    }

    venderHandel() {
        this.apiVenderVirifyCall()
    }

    updateHandel() {
      
    }

    componentDidMount(){
        this.apiDashBoardCall()
    }

    apiDashBoardCall = () => {
        axios.get(URL_API.Dashboard+this.state.uid)
            .then(res => {
                const jsonData = res.data
                console.log("Dashboard: "+ jsonData.data)
                const img=jsonData.data.user_avatar;
                const dobData=jsonData.data.dob;
               
                var dob=new Date().toISOString();
                var avatar='https://i.pinimg.com/originals/43/96/61/439661dcc0d410d476d6d421b1812540.jpg'
                if(img !==""){
                    avatar=URL_API.PROFILE_AVATAR_BASE_URL+img
                }
                if(dobData !==""){
                    dob=dobData
                }

                this.setState({
                    uid:jsonData.data.uid,
                    fname:jsonData.data.first_name,
                    lname: jsonData.data.last_name,
                    mobile:jsonData.data.mobile,
                    email:jsonData.data.email,
                    gender:jsonData.data.gender,
                    dob:dob,
                    user_avatar:avatar,
                })
                
            }).catch(error => {
                if (error.response) {
                    Swal.fire(error.response.data.message)
                }
                console.log(error)
            })
    }


    apiVenderVirifyCall = () => {
        axios.get(URL.CheckVender+this.state.uid)
            .then(res => {
                const jsonData = res.data
                const isCheck=jsonData.data.is_verify
                const shopId=jsonData.data.vender_id
                this.setState({
                    vender_id:shopId,
                    category_id:jsonData.data.category_id,
                    category_name:jsonData.data.category_name,
                    is_verify:isCheck
                })

                if(isCheck==1){
                    Swal.fire({
                        title:'<p style="color:green;font-size:25px">'+jsonData.message+"</p>",
                        html:"<b>Your Shop ID:</b> </br> <b>#"+shopId+"</b>",
                        type: 'info',
                        showCloseButton: true,
                        showCancelButton: false,
                        focusConfirm: false,
                        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Done!',
                      })
                }
                if(isCheck==3){
                    Swal.fire({
                        title:'<p style="color:red;font-size:25px">'+jsonData.message+"</p>",
                        html:"<b>Your Shop ID:</b> </br> <b>#"+shopId+"</b>",
                        type: 'error',
                        showCloseButton: true,
                        showCancelButton: false,
                        focusConfirm: false,
                        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Done!',
                      })
                }

            }).catch(error => {
                if (error.response) {
                    Swal.fire(error.response.data.message)
                }
                console.log(error)
            })
    }

    editClick = () =>{
        this.setState({
            isEdit:true
           })
    }



    render() {
        const { fname,lname, mobile,email, user_avatar,gender,dob,is_verify,uid,isEdit } = this.state
        if(is_verify==0){
            return( <PopupSubmit fname={fname} lname={lname} mobile={mobile} uid={uid}/>)
        }
        if(is_verify==2){
            return <Redirect to='/shopregister' />
        }
        
        if(isEdit){
            return <EditProfilePopupView  
             uid={uid} fname={fname} lname={lname} mobile={mobile} email={email}
             user_avatar={user_avatar} gender={gender} dob={dob} 
            />
        }
        
        return (

            <nav className="mb-1 navbar navbar-expand-lg navbar-dark fixed-top mb-5">

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
                            <h5 className="pr-2 ">{fname +" "+lname}</h5>
                            <h5 className="pr-2 ">{mobile}</h5>
                        </li>

                        <li className="nav-item avatar">
                            <span className="nav-link p-0" href="#">
                                <img src={user_avatar}
                                    className="rounded-circle img-responsive"
                                     height="45"
                                     width="45"
                                      />
                            </span>
                        </li>

                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" id="myMenu" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                            </span>
                            <div className="dropdown-menu dropdown-menu-right mt-2" role="menu">
                                
                                <button className="dropdown-item" onClick={this.editClick}>
                                    <i className="fas fa-user-edit"></i> {'  '}Edit Profile</button>
                             
                             
                                <NavLink className="dropdown-item" to="/33">
                                    <i className="fas fa-bell"></i>{'   '}Notification</NavLink>
                              
                                <button className="dropdown-item"
                    
                                    onClick={() => this.changePasswordHandel()}>
                                     <i class="fas fa-unlock-alt"></i>
                                    {'   '}Change Password </button>

                                <button className="dropdown-item"
                            
                                    onClick={() => this.venderHandel()}>
                                    <i class="fas fa-shopping-basket"></i>
                                    {'   '}For Vender </button>


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