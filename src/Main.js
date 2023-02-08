import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import Map from "./Map";
import Restaurants from "./Restaurants";

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayInfo: false
        }
    }

    displaySearch = (e) => {
        e.preventDefault();
        this.setState({
            displayInfo: true
        })
    }

    render() {
        return (
            <>
                <Container>
                    <Form>
                        <Form.Group>
                            <Form.Label>Enter City</Form.Label>
                            <Form.Control type="text" placeholder="...Not hooked up/ explore button will only show info for Seattle" />
                        </Form.Group>
                        <Button onClick={this.displaySearch}>Explore!</Button>
                    </Form>
                </Container>

                {this.state.displayInfo &&
                    <>
                        <Map/>
                        <Restaurants />
                    </>
                }
            </>
        )
    }
}

export default Main;