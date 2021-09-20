import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component {

    render(){
        const { users } = this.props
        const ArraySorting = users.sort((first , second) => second.totalScore - first.totalScore)

        return (
    <div>  
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Avatar</th>
                    <th scope="col">Info</th>
                    <th scope="col">Answered Q</th>
                    <th scope="col">Question Created</th>
                    <th scope="col">Score</th>
                    </tr>
            </thead>
            
            {ArraySorting.map((leader) => (
            <tbody key={leader.id}>
                <tr>
                    <td>
                        <img src ={leader.avatarURL} alt={leader.id} style={{width: 50, height:50}}/>
                    </td>
                    <td>
                        {leader.name}
                    </td>
                    <td>
                        {Object.keys(leader.answers).length}
                    </td>
                    <td>
                        {leader.questions.length}
                    </td>
                    <td>
                        {leader.totalScore}
                    </td>
                </tr>

            </tbody>
            ))}
        </table>
    </div>
    )}
}

function mapStateToProps( state ) {
    const usersArray = Object.values(state.users)
    usersArray.map( (user) => user.totalScore = Object.keys(user.answers).length + user.questions.length )
    return {
        users: usersArray
    }
}

export default connect(mapStateToProps)(LeaderBoard)