import React, { Component } from 'react'

class unAnsweredQPage extends Component {
    render(){
    return (
            <div class="p-2 bg-light border m-2 w-50 mx-auto">
                <div class="col-md-4">
                    <img src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg" style={{width: 100 , height: 100}} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Would you rather</h5>
                        <div class="custom-control custom-radio m-3">
                            <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
                            <label class="custom-control-label" for="customRadio1"> &emsp;Write JavaScript</label>
                        </div>
                        <div class="custom-control custom-radio m-3">
                            <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" />
                            <label class="custom-control-label" for="customRadio2"> &emsp;Or Write Swift</label>
                        </div>
                        <button class="btn btn-primary m-3" type="button">Submit</button>
                    </div>
                </div>
            </div>
    )}}

export default unAnsweredQPage