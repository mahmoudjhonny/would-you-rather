import React , { Component } from 'react'
import { connect } from 'react-redux'

class unAnsweredQ extends Component{
    render(){
    //    const {question , users} = this.props

       console.log(this.props)

    return (
        // question.map((q) => 
        // (
        <div className="row gap-3 ms-2 w-75">
            <div className="p-2 bg-light border">
                <div className="col-md-2 d-flex w-25">
                    <img src= "{users['avatarURL']}" className="img-fluid rounded-start w-100" alt="..." />
                     <div className="d-flex align-items-center">author</div>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Would you rather</h5>
                        <p className="card-text">&emsp;Write JavaScript  <br /> &emsp;or ....</p>
                        <button className="btn btn-primary" type="button">Answere Poll</button>
                    </div>
                </div>
        </div>        
        </div>
    )}
}
   
// function mapStateToProps ({auth, users, questions}) {

//     const question = Object.keys(questions).map((key) => questions[key])

//     return {
//         auth,
//         question,
//     }
// }

const mapStateToProps = ({auth, questions}, { id }) => {
    const question = questions['id'];
    // const author = question ? users[question.author] : ''
  
    return {
        auth,
        questions,
        // author
    }
}

export default connect(mapStateToProps)(unAnsweredQ)
