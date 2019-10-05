import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import NavBar from '../menu/NavBar'



export default class PopupView extends React.Component {

    state = {
        show: true,
    }


    handleClose = () => {
        this.setState({
            show: false,
            mobile: "897899897",
            name: "Kaju Kumar",
        })
    }


    render() {
        const { mobile, name, data,show } = this.state
        return (
            <div>
                <NavBar/>
                <Modal isOpen={show} onHide={this.handleClose}>
                    <form onSubmit={this.handlerSubmit}>
                        <ModalHeader className="text-success">Vender Verification Pending</ModalHeader>
                        <ModalBody>Name:<b> {' '} {name}</b> <br /> Mobile No: {' '} <b>{mobile}</b> </ModalBody>
                        <ModalBody>
                            
            
                        </ModalBody>

                        <ModalFooter>
                            <Button color="danger" onClick={this.handleClose}>Close</Button>
                        </ModalFooter>
                    </form>
                </Modal>
            </div>

        );
    }
}