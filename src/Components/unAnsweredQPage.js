import React, { Component } from 'react'

class unAnsweredQPage extends Component {
    render(){
    return (
            <div className="p-2 bg-light border m-2 w-50 mx-auto">
                <div className="col-md-4">
                    <img src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg" style={{width: 100 , height: 100}} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Would you rather</h5>
                        <div className="custom-control custom-radio m-3">
                            <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="customRadio1"> &emsp;Write JavaScript</label>
                        </div>
                        <div className="custom-control custom-radio m-3">
                            <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="customRadio2"> &emsp;Or Write Swift</label>
                        </div>
                        <button className="btn btn-primary m-3" type="button">Submit</button>
                    </div>
                </div>
            </div>
    )}}

export default unAnsweredQPage