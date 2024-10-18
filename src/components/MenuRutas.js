import React, { Component } from 'react';

export default class MenuRutas extends Component {
    render() {
        return (
            <div>
                <ul id="menurutas" style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ display: "inline" }}>
                        <a href="/">Home</a> |
                    </li>
                    <li style={{ display: "inline" }}>
                        <a href="/asdwhelads">NotFound</a> |
                    </li>
                    <li style={{ display: "inline" }}>
                        <a href="/collatz/2">Collatz - 2</a> |
                    </li>
                    <li style={{ display: "inline" }}>
                        <a href="/collatz/20">Collatz - 20</a> |
                    </li>
                    <li style={{ display: "inline" }}>
                        <a href="/collatz/200">Collatz - 200</a> |
                    </li>
                </ul>
            </div>
        )
    }
}
