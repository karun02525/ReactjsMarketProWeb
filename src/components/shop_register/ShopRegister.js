import React, { Component } from 'react'
import NavBar from '../menu/NavBar'
import { SketchPicker } from 'react-color'



export default class ShopRegister extends Component {

    state = {
        displayColorPicker: false,
        background: '#fff'
    }



    handleColorPickarOpen = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
      };
    
      handleColorPickar = color => {
        this.setState({ background: color.hex  });
    };

    handleColorPickarClose = () => {
        this.setState({ displayColorPicker: false })
      };

    render() {
        const {background}=this.state
        console.log("Color Code: "+background)


        return (
            <div>
                <NavBar />
                <div class="container">
                    <h4 className="ml-3">Registration Form</h4>
                    <div class="col-lg-12 well mt-3">
                        <div class="row">
                            <form>
                                <div class="col-sm-12">
                                    <label>Your Shop Register ID : </label>
                                    <label className="ml-2 font-weight-bold">#8786786787888</label><br></br>
                                    <label>Your Name : </label>
                                    <label className="ml-2 font-weight-bold">Karun Kumar</label><br></br>
                                    <label>Category  : </label>
                                    <label className="ml-2 font-weight-bold">Hostal</label><br></br>
                                </div>
                                <div class="col-sm-12 mt-5">
                                    <div class="row">
                                        <div class="col-sm-6 form-group">
                                            <label>Shop Name</label>
                                            <input type="text" placeholder="Enter Shop Name Here.." class="form-control" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Email Address</label>
                                        <input type="text" placeholder="Enter Email Address Here.." class="form-control" />
                                    </div>

                                    <div class="form-group">
                                        <label>Shop Mobile Number</label>
                                        <input type="text" placeholder="Enter Shop Mobile Number Here.."
                                            class="form-control"
                                            maxLength="10"
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label>Shop Color</label>
                                      
                                        <SketchPicker
                                            color={this.state.background}
                                            onChangeComplete={this.handleColorPickar}
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label>Shop Address</label>
                                        <textarea placeholder="Enter Shop Address Here.." rows="3" class="form-control"></textarea>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-4 form-group">
                                            <label>City</label>
                                            <input type="text" placeholder="Enter City Name Here.." class="form-control" />
                                        </div>
                                        <div class="col-sm-4 form-group">
                                            <label>State</label>
                                            <input type="text" placeholder="Enter State Name Here.." class="form-control" />
                                        </div>
                                        <div class="col-sm-4 form-group">
                                            <label>Zip</label>
                                            <input type="text" placeholder="Enter Zip Code Here.." class="form-control" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6 form-group">
                                            <label>Owner First Name</label>
                                            <input type="text" placeholder="Enter Owner First Name Here.." class="form-control" />
                                        </div>
                                        <div class="col-sm-6 form-group">
                                            <label>Owner Last Name</label>
                                            <input type="text" placeholder="Enter Owner Last Name Here.." class="form-control" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Owner Mobile Number</label>
                                        <input type="text" placeholder="Enter Owner Mobile Number Here.."
                                            class="form-control"
                                            maxLength="10"
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label>Website</label>
                                        <input type="text" placeholder="Enter Website Name Here.." class="form-control" />
                                    </div>
                                    <button type="button" class="btn btn-lg btn-info">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
