import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is header text</h1>
            <Container>
                <Row>
                    <Col>
                        <p>Brandon Goldberg</p>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload.
                        </p>
                        <p>Hello World</p>
                        <img
                            src="./phin.jpeg"
                            alt="Phineas, a medium-sized dog with white fur and a brown nose."
                        ></img>
                        <ul>
                            <li>This</li>
                            <li>is</li>
                            <li>a</li>
                            <li>list</li>
                        </ul>

                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </button>
                        <div
                            style={{
                                backgroundColor: "red",
                                height: "50px",
                                width: "75px",
                            }}
                        ></div>
                    </Col>

                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                height: "50px",
                                width: "75px",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
