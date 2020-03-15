import React from 'react';
import {Form, Button} from 'react-bootstrap';

function ContactUs() {
    return (
        <div style={styles.contactusWrapper}>
            <div style={styles.formWrapper}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />

                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="text" placeholder="Message" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
          </Button>
                </Form>
            </div>
        </div>
    );

}

const styles = {
    contactusWrapper: {
        height: "350px",
        // lineHeight: "300px",
        textAlign: "center",
        borderBottom: "1px solid #bbb",
        padding: "20px"
    },

    formWrapper: {
        margin: "auto",
        width: "400px"
    }
}

export default ContactUs;