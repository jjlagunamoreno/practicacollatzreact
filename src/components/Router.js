import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Collatz from './Collatz'
import Home from './Home'
import NotFound from './NotFound'

export default class Router extends Component {
    render() {
        function CollatzElement() {
            var { minumero } = useParams();
            return <Collatz numero={minumero} />
        }

        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/collatz/:minumero" element={<Collatz numero="2" />} /> */}
                    <Route path="/collatz/:minumero" element={<CollatzElement />} />
                    {/* PARA LAS RUTAS QUE NO EXISTEN DEBEMOS UTILIZAR UN ASTERISCO DENTRO DEL path
                    Y DEBE SER LA ÚLTIMA ETIQUETA DE '<Routes>' */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
