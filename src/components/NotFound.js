import React, { Component } from 'react'

export default class NotFound extends Component {

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <h3>Not Found!</h3>
                <img src="/images/error404-not-found.png" style={{ width: "30%" }} />
            </div>
        )
    }
}
