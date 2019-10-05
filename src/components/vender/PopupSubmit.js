import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { URL } from '../../Constant/ApiConstant';
import NavBar from '../menu/NavBar'

import axios from 'axios'
import Swal from 'sweetalert2'



export default class PopupSubmit extends React.Component {
    constructor(props){
        super(props)
        this.apiCall()
        this.state = {
            show: true,
            mobile:this.props.mobile,
            name: this.props.name,
            uid:this.props.uid,
            data: []
        };
    }


    
    

    apiCall = () => {
        axios.get(URL.GetCategory)
            .then(res => {
                const jsonData = res.data
                console.log("Response: "+ jsonData.data )
                this.setState({
                    data:jsonData.data
                })
                
            }).catch(error => {
                if (error.response) {
                    Swal.fire(error.response.data.message)
                }
                console.log(error)
            })
    }

    handlerSubmit = e => {
        e.preventDefault();
        const payload = {
            uid:this.state.uid,
            mobile:this.state.mobile,
            fullname:this.state.name,
            category_id: this.category_id.value
        }

        axios.post(URL.VenderRegister,payload)
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
                    show: false
                })
            }, 3000);



        }).catch(error => {
            if (error.response) {
                Swal.fire(error.response.data.message)
            }
            console.log(error)
        })
    }


    handleClose = () => {
        this.setState({
            show: false
        })
    }


    render() {
        const { mobile, name, data,show } = this.state
           
        return (
            <div>
                <NavBar/>
                <Modal isOpen={show} onHide={this.handleClose}>
                    <form onSubmit={this.handlerSubmit}>
                        <ModalHeader className="text-primary">For Vender Register Shop</ModalHeader>
                        <ModalBody>Name:<b> {' '} {name}</b> <br /> Mobile No: {' '} <b>{mobile}</b> </ModalBody>
                        <ModalBody>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group" >
                                        <label for="category">Select Category</label>
                                        <select id="category" className="form-control text-capitalize" ref={(ref) => { this.category_id = ref }}>
                                            <option selected disabled>Choose Category</option>
                                            {data.map((item, i) =>
                                                (<option key={i} value={item.category_id}>
                                                    {item.category_name}
                                                </option>))
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>

                        </ModalBody>

                        <ModalFooter>
                            <Button color="info" type="submit">Submit</Button>
                            <Button color="danger" onClick={this.handleClose}>Close</Button>
                        </ModalFooter>
                    </form>
                </Modal>
            </div>

        );
    }
}