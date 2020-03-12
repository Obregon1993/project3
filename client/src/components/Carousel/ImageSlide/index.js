import React from "react";

let url = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fcolorful-of-dahlia-pink-flower-in-beautiful-garden-royalty-free-image-825886130-1554743243.jpg%3Fcrop%3D0.669xw%3A1.00xh%3B0.331xw%2C0%26resize%3D640%3A*&imgrefurl=https%3A%2F%2Fwww.goodhousekeeping.com%2Fhome%2Fgardening%2Fg4348%2Fsummer-flowers%2F&tbnid=rnEp0vJ4QEI0mM&vet=12ahUKEwjopbmP05PoAhVLNFkKHQrZDQYQMygEegUIARDEAg..i&docid=Ks2tlc2wNpR9fM&w=640&h=639&q=flower&ved=2ahUKEwjopbmP05PoAhVLNFkKHQrZDQYQMygEegUIARDEAg"

const ImageSlide = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div className="image-slide" style={styles}></div>
    );
}

export default ImageSlide