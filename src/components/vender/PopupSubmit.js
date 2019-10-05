import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { URL } from '../../Constant/ApiConstant';
import NavBar from '../menu/NavBar'

import axios from 'axios'
import Swal from 'sweetalert2'




export default class PopupSubmit extends React.Component {

    state = {
        show: true,
        mobile: "897899897",
        name: "Kaju Kumar",
        data: [
            {
                "category_id": "1570193474122",
                "category_name": "Vegetables",
                "category_avatar": "category_75173661-4f95-4243-b933-71053858d322.png",
                "category_postion": 1,
                "create_at": "2019-10-04 18:21:14"
            },
            {
                "category_id": "1570193520768",
                "category_name": "Fruites",
                "category_avatar": "category_672a659e-0cd2-4b98-897d-81b7f7e773b7.png",
                "category_postion": 2,
                "create_at": "2019-10-04 18:22:00"
            },
            {
                "category_id": "1570195926791",
                "category_name": "Electronics",
                "category_avatar": "category_db77c2a0-9308-424c-9df5-6c88dd4c940e.png",
                "category_postion": 3,
                "create_at": "2019-10-04 19:02:06"
            }
        ]
    };




    handlerSubmit = e => {
        e.preventDefault();
        const payload = {
            uid:"98889",
            mobile: "9878978979",
            fullname: "Karun Kumar",
            category_id: this.category_id.value
        }

        console.log("All Data : " + JSON.stringify(payload))
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
                        <ModalHeader className="text-success">Vender Verification</ModalHeader>
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