import React , { Component } from 'react'

class footer extends Component {
    render() {
    return (
        <div class="card-footer text-muted text-center mt-2">
            Copyright &#169; 2021-{new Date().getFullYear()}. All Rights Reserved.
                Would-You-Rather is Powered by <a href="https://www.facebook.com/profile.php?id=100007417996154" target="_blank" style={{textDecoration: 'none'}}>Mahmoud Mostafa</a>.
        </div>
    )}
}

export default footer
