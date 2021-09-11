import React , {Component } from 'react'
import AnsweredQ from './answeredQ'
import UnAnsweredQ from './unAnsweredQ'

class homeBody extends Component {
    render() {
    return (
        <div className="d-flex align-items-start ms-2 mt-3">
            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button className="nav-link active" id="v-pills-unansewer-tab" data-bs-toggle="pill" data-bs-target="#v-pills-unansewer" type="button" role="tab" aria-controls="v-pills-unansewer" aria-selected="true">Un Answered</button>
                <button className="nav-link" id="v-pills-ansewer-tab" data-bs-toggle="pill" data-bs-target="#v-pills-ansewer" type="button" role="tab" aria-controls="v-pills-ansewer" aria-selected="false">Answered </button>
            </div>
            <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-unansewer" role="tabpanel" aria-labelledby="v-pills-unansewer-tab">
                    <UnAnsweredQ />
                </div>
                <div class="tab-pane fade" id="v-pills-ansewer" role="tabpanel" aria-labelledby="v-pills-ansewer-tab">
                    <AnsweredQ />
                </div>
            </div>
        </div>
    )}}

export default homeBody