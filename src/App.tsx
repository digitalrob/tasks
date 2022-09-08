import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>I am a god!</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Container>
                <Row>
                    <Col>
                        <div className="App-Col" />
                        <ol>
                            <li>Feel You Now, Alessia Cara</li>
                            <li>Hells Comin With Me, Poor Mans Poison</li>
                            <li>Celeb, PSY</li>
                        </ol>
                    </Col>
                    <Col>
                        <div className="App-Col" />
                        <p>Robert Reardon says...</p>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <p> </p>
                    </Col>
                </Row>
            </Container>
            <img
                src="https://data.whicdn.com/images/188333705/original.png"
                alt="snorlax.png"
            />
        </div>
    );
}

export default App;
