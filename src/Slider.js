import React from 'react';
import logo from './logo.svg';
import {Carousel} from 'react-bootstrap';
function Slider() {
    return (
        <div style={styles.sliderWrapper}>
            <div style={styles.sliderContainer}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            style={styles.sliderImg}
                            src={logo}
                            alt="First slide"
                        />
                        <Carousel.Caption style={styles.galleryCaption}>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={styles.sliderImg}
                            src={logo}
                            alt="Third slide"
                        />

                        <Carousel.Caption style={styles.galleryCaption}>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={styles.sliderImg}
                            src={logo}
                            alt="Third slide"
                        />

                        <Carousel.Caption style={styles.galleryCaption}>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
        </div>
    );
}

const styles={
    sliderWrapper: {
        height: "300px",
        width: "100%",
        borderBottom: "1px solid #bbb"
      },

      sliderContainer: {
        textAlign: "center",
      },

      sliderImg: {
        height: "300px"
      },

      galleryCaption: {
        color: "#000",
      },
}

export default Slider;