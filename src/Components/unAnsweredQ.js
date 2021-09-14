import React , { Component } from 'react'

class unAnsweredQ extends Component{
    render(){
    return (
        <div className="row gap-3 ms-2 w-100">
            <div className="p-2 bg-light border">
                <div className="col-md-4">
                    <img src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg" style={{width: 100 , height: 100}} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Would you rather</h5>
                        <p className="card-text">&emsp;Write JavaScript  <br /> &emsp;or ....</p>
                        <button className="btn btn-primary" type="button">Answere Poll</button>
                    </div>
                </div>
        </div>
        
        <div className="p-2 bg-light border">
                <div className="col-md-4">
                <img src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg" style={{width: 100 , height: 100}} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Would you rather</h5>
                        <p className="card-text">&emsp;Write JavaScript <br /> &emsp;or ....</p>
                        <button className="btn btn-primary" type="button">Answere Poll</button>
                    </div>
                </div>
        </div>
        
        </div>
    )}
}

export default unAnsweredQ
