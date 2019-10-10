import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';
import NavBar from './NavBar'



export default class EditProfilePopupView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: true,
            uid: props.uid,
            mobile: props.mobile,
            first_name: props.fname,
            last_name: props.lname,
            email: props.email,
            gender: props.gender,
            selectedDate: props.dob,
            user_avatar: props.user_avatar,
        }
    }

    handleClose = () => {
        this.setState({
            show: false,

        })
    }

    pictureOnClick = (e) => {
        this.refs.fileUploader.click();
    }

    onChangeFile = (event) => {
        event.stopPropagation();
        event.preventDefault();
        //const file = event.target.files[0];
        const file = URL.createObjectURL(event.target.files[0])
        console.log(file);
        this.setState({ user_avatar: file });
    }


     apiUpdateProfileCall(){
        const data = new FormData();
        data.append('category_name', this.name.value);
        data.append('category_desc', this.desc.value);
        data.append('avatar_large', this.avatar_large.files[0]);

        axios.post('http://localhost:8087/admin/api/create-category',data)
        .then(res=>{
            const jsonData=res.data
            Swal.fire({
             type: 'success',
             title: jsonData.message,
             showConfirmButton: false,
             timer: 1000
           }) 

        }).catch(error=>{
            if (error.response) {
                Swal.fire(error.response.data.message)
            }
            console.log(error)
        })

     }


    onChangeDate = (date, formattedValue) => {
        var ios = new Date(formattedValue);
        const dob = ios.toLocaleDateString('en-GB');

        console.log(dob);
        this.setState({
            selectedDate: dob
        });
    }

    render() {

        const { mobile, first_name, last_name, email, show, gender, } = this.state
        return (
            <div>
                <NavBar />
                <Modal isOpen={show} onHide={this.handleClose}>

                    <ModalHeader className="text-success">Edit Profile</ModalHeader>
                    <ModalBody>

                        <div className="d-flex justify-content-center" >
                            <img src={this.state.user_avatar}
                                className="rounded-circle img-responsive"
                                height="145" width="145" />


                            <div onClick={this.pictureOnClick} className="text-center pt-5 mt-5">
                                <i className="fa fa-camera" aria-hidden="true" />
                                <input type="file" id="file"
                                    ref="fileUploader"
                                    style={{ display: "none" }}
                                    onChange={this.onChangeFile}
                                />
                            </div>
                        </div>


                        <div>
                            <label>Mobile : <strong>{mobile}</strong></label>
                            <label style={{ 'margin-left': '148px' }}> Gender : <strong>{gender}</strong></label>
                        </div>

                        <form className='form' onSubmit={this.submitHandler}>
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
                                    <input type="text" className="form-control" id="ur" disabled
                                        placeholder="Enter last name"
                                        maxLength="30"
                                        name='last_name' value={last_name} onChange={this.changeHandler}
                                    />
                                </div>
                            </div>


                            <div className="form-group">
                                <label for="usr">Email ID </label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-at"></i></span>
                                    </div>
                                    <input type="text" className="form-control" id="ur"
                                        placeholder="Enter email id"
                                        maxLength="30"
                                        name='email' value={email} onChange={this.changeHandler}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label for="usr">Select DOB </label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><i class="fas fa-birthday-cake" /></span>
                                    </div>
                                    <DatePickerInput
                                        onChange={this.onChangeDate}
                                        value={this.state.date}
                                        defaultValue={this.state.selectedDate}
                                        className='my-custom-datepicker-component'
                                        displayFormat='DD/MM/YYYY'
                                        validationFormat='DD/MM/YYYY'
                                        locale='en-GB' />
                                </div>
                            </div>
                        </form>


                    </ModalBody>
                    <ModalFooter>
                        <Button color="info" onClick={this.handleClose}>Update Profile</Button>
                        <Button color="danger" onClick={this.handleClose}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>

        );
    }
}