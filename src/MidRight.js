import React from 'react';
import { Tabs, Tab, Accordion, Card, Button, Carousel } from 'react-bootstrap';
import logo from './logo.svg';
function MidRight(){
    return(
        <div style={styles.midRightSection}>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Notice">
              <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Leave Tomorrow
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Tomorrow is saturday</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      Exam Notice
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>Single sheet of paper can not define your future</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                      Exam Notice
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>Single sheet of paper can not define your future</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Tab>
            <Tab eventKey="profile" title="Gallary">
              <Carousel>
                <Carousel.Item>
                  <img
                    style={styles.galleryImage}
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
                    style={styles.galleryImage}
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
                    style={styles.galleryImage}
                    src={logo}
                    alt="Third slide"
                  />

                  <Carousel.Caption style={styles.galleryCaption}>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Tab>
          </Tabs>
        </div>
    );
}

const styles={
    midRightSection: {
        height: "500px",
        // lineHeight: "500px",
        textAlign: "center",
        width: "49%",
        float: "right",
        padding: "20px"
      },
    
    galleryImage: {
        height: "400px"
      },
      galleryCaption: {
        color: "#000",
      },
}

export default MidRight;