import React from 'react';
import logo from './logo.svg';

function MidRight() {
    return (
        <div style={styles.midLeftSection}>
            <div style={styles.topTestimonial}>
                <img src={logo} style={styles.principleImg} />
                <h3>Mr. Principle</h3>
            </div>
            <div style={styles.bottomTestimonial}>
                <p style={styles.textTestimonial}>
                    I want to say to my fello students, keep calm and keep learning.
                    Beside that, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

            </div>
        </div>
    );
}

const styles={
    midLeftSection: {
        height: "500px",
        width: "50%",
        borderRight: "1px solid #bbb",
        float: "left"
      },

      topTestimonial: {
        margin: "auto",
      },

      principleImg: {
        height: "80px",
        width: "80px",
      },

      bottomTestimonial: {
        padding: "30px",
      },
      textTestimonial: {
        // border: "1px solid #bbb",
        textAlign: "center",
        padding: "20px",
        lineHeight: "30px"
      },
}

export default MidRight;