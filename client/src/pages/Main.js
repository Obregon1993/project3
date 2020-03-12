import React from "react"
import Container from "../components/Container"
import Navbar from "../components/Navbar"
import ParallaxTemp from "../components/ParallaxTemp"
import Carousel from "../components/Carousel"

function Main() {
    return (
        <div className="grey lighten-1">
            <Container />
            <Navbar />
            <ParallaxTemp />
            <Carousel />

        </div>


    )
}

export default Main