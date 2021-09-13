import React , { Component } from 'react'

var color = {
    "button_background_color": "#0d6efd",
    "color": "#fff"
}
class NotFoundPage extends Component {
    render() {
    return (
            <div className = "mt-3 text-center">
                <h3>404 - PAGE NOT FOUND</h3>
                <p>The page you are looking for might have been removed <br /> 
                had its name changed or is temporarily unavailable</p>
                <button className="rounded-pill" style = {{
                    backgroundColor: color.button_background_color,
                    color: color.color,
                    height: 45,
                    width: 250,
                    border: 2
                }}>GO TO HOMEPAGE</button>
            </div>
    )}
}

export default NotFoundPage
