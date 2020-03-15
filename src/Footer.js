import React from 'react';
function Footer() {
  return (
    <div style={styles.footerWrapper}>
      © 2020. All rights reserved | Design by MRG
    </div>
  );
}

const styles = {
  footerWrapper: {
    height: "100px",
    lineHeight: "100px",
    textAlign: "center",
    backgroundImage: "linear-gradient(red, #fff, blue)"
  },
}

export default Footer;