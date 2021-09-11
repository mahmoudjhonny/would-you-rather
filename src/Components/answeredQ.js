import React , { Component } from 'react'

class answeredQ extends Component{
    render(){
    return (
        <div class="row gap-3 ms-2 w-100">
            <div class="p-2 bg-light border">
                <div class="col-md-4">
                    <img src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg" style={{width: 100 , height: 100}} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Would you rather</h5>
                        <p class="card-text">&emsp;Write JavaScript  <br /> &emsp;or ....</p>
                        <button class="btn btn-primary" type="button">Results</button>
                    </div>
                </div>
        </div>
        
        <div class="p-2 bg-light border">
                <div class="col-md-4">
                <img src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg" style={{width: 100 , height: 100}} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Would you rather</h5>
                        <p class="card-text">&emsp;Write JavaScript <br /> &emsp;or ....</p>
                        <button class="btn btn-primary" type="button">Results</button>
                    </div>
                </div>
        </div>
        
        </div>
    )}
}

export default answeredQ
