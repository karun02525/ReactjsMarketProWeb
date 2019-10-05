import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import NavBar from './NavBar'

export default class ModelView extends Component {
    state = {
           showPopup: true
         }

         
    handleClose = () => {
        this.setState({
            showPopup: false
        })
    }

         
    render() {
        const { showPopup } = this.state
           return (
               <div>   <NavBar /> 
              <Modal isOpen={showPopup} onHide={this.handleClose} >
                    <form onSubmit={this.handlerSubmit}>
                        <ModalHeader className="text-success">Vender Verification</ModalHeader>
                        <ModalBody>Name </ModalBody>
                    
                        <ModalFooter>
                            <Button color="info" >Submit</Button>
                            <Button color="danger" onClick={this.handleClose} >Close</Button>
                        </ModalFooter>
                    </form>
                </Modal>
                
                </div>
                )
        
    }
}
