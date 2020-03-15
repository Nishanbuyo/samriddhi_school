import React from 'react';
import logo from './logo.svg';
function Header() {
    return (
        <div style={styles.header}>
            <div style={styles.leftHeader}>
                <img style={styles.logImg} src={logo} />
                <div style={styles.headerText}>
                    <h1 style={styles.headingTitle}>Samriddhi College</h1>
                    <h4>Lokanthali, Bhaktapur</h4>
                </div>
            </div>
            <div style={styles.rightHeader}>
                <h3>Samriddhi@info.com</h3>
                <h3>98511235090</h3>
            </div>
        </div>
    );
}

const styles = {
    header: {
        height: "108px",
        width: '100%',
        backgroundImage: "linear-gradient(45deg, #fff, #3489c5)",
    },
    leftHeader: {
        float: "left",
        width: "500px",
    },
    logImg: {
        height: "100px",
        width: "130px",
        float: "left"
    },
    headerText: {
        marginLeft: "100px",
        paddingTop: "10px"
    },
    headingTitle: {
        margin: "0px",
    },
    rightHeader: {
        float: "right",
        height: "100%",
        paddingRight: "20px",
        color: "#fff",
        padding: "12px"
    },
}
export default Header;