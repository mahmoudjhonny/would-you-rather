import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionPage extends Component {
    render(){
        console.log(this.props)

    const { author , avatarURL, optionPreview} = this.props;

        return (
            <div className="row gap-3 ms-2 w-75">
            <div className="p-2 bg-light border">
                <div className="col-md-2 d-flex w-25">
                    <img src= {avatarURL} className="img-fluid rounded-start w-50" alt="..." />
                     <div className="d-flex align-items-center">{author}</div>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Would you rather</h5>
                        <p className="card-text">&emsp;{optionPreview}  <br /> &emsp;or ....</p>
                        <button className="btn btn-primary" type="button">View Poll</button>
                    </div>
                </div>
        </div>        
        </div>
    )}
}

const mapStateToProps = ({questions, users}, { id }) => {
    const question = questions[id];
    return {
        question,
        author: users[question['author']]['name'],
        avatarURL: users[question['author']]['avatarURL'],
        optionPreview: question['optionOne']['text']
    }
}

export default connect(mapStateToProps)(QuestionPage)
