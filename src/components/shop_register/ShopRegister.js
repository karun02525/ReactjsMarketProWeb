import React, { Component } from 'react'
import NavBar from '../menu/NavBar'
import { SketchPicker } from 'react-color'
import { DropzoneArea } from 'material-ui-dropzone'




export default class ShopRegister extends Component {

    state = {
        opened: false,
        background: '#CFCFCF',
        title: '',
        files: []
    }



    toggleBox = e => {
        const { opened } = this.state;
        this.setState({
            opened: !opened,
        });
    }


    handleColorPickar = color => {
        this.setState({ background: color.hex });
    };

    handleChange(files){
        console.log("File: "+files[0] )

        this.setState({
          files: files
        });
      }

    render() {
        var { title } = this.state;
        const { background, opened } = this.state
        console.log("Color Code: " + background)

        if (opened) {
            title = 'Hide';
        } else {
            title = 'Show';
        }


        return (
            <div>
                <NavBar />
                <div class="container">
                    <h4 className="ml-3">Registration Form</h4>
                    <div class="col-lg-12 well mt-3">
                        <div class="row">
                      
                      {/* One Div */}

                            <div class="col-sm-8">
                                 <div class="row">
                                    <form>
                                        <div className="col-sm-6">
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
                                                    <input type="text" placeholder="Enter Shop Name Here.." class="form-control" required />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Email Address</label>
                                                <input type="text" placeholder="Enter Email Address Here.." class="form-control" required />
                                            </div>

                                            <div class="form-group">
                                                <label>Shop Mobile Number</label>
                                                <input type="text" placeholder="Enter Shop Mobile Number Here.."
                                                    class="form-control"
                                                    maxLength="10"
                                                    required
                                                />
                                            </div>

                                            <div class="form-group">
                                                <label>Select Your Shop Color Similar</label><br />
                                                <div className="btn btn-outline-success" onClick={this.toggleBox} style={{ background: background }}>
                                                    {title}
                                                </div>
                                                {opened && (
                                                    <div className="boxContent">
                                                        <SketchPicker
                                                            color={background}
                                                            onChangeComplete={this.handleColorPickar}
                                                        />
                                                    </div>
                                                )}
                                            </div>

                                            <div class="form-group">
                                                <label>Shop Address</label>
                                                <textarea placeholder="Enter Shop Address Here.." rows="3" class="form-control" required></textarea>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-4 form-group">
                                                    <label>City</label>
                                                    <input type="text" placeholder="Enter City Name Here.." class="form-control" required />
                                                </div>
                                                <div class="col-sm-4 form-group">
                                                    <label>State</label>
                                                    <input type="text" placeholder="Enter State Name Here.." class="form-control" required />
                                                </div>
                                                <div class="col-sm-4 form-group">
                                                    <label>Zip</label>
                                                    <input type="text" placeholder="Enter Zip Code Here.." class="form-control" required />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-6 form-group">
                                                    <label>Owner Name</label>
                                                    <input type="text" placeholder="Enter Owner  Name Here.." class="form-control" required />
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
                                                <input type="text" placeholder="Enter Website Name Here.." class="form-control" required />
                                            </div>

                                            <button type="submit" class="btn btn-lg btn-info">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                      
                          {/* 2nd Div Upload  File */}
                            <div className="col-sm-4">
                                <DropzoneArea
                                    dropzoneText="Please upload shop image"
                                    onChange={this.handleChange.bind(this)}
                                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                                    showPreviews={false}
                                    maxFileSize={1222*1000*5}
                                    filesLimit={1}
                                />
                            </div>
                        

                        </div>
                        </div>
                    </div>
                </div>
                )
            }
        }
