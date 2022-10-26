import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    const [answer, setAnswer] = useState<string>("");
    function ChangeAnswer(event: ChangeEvent) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="formCheckAnswer" as={Row}>
                <Form.Label column sm={1}>
                    Check Answer
                </Form.Label>
                <Col>
                    {" "}
                    <Form.Control
                        type="text"
                        value={answer}
                        onChange={ChangeAnswer}
                    ></Form.Control>
                </Col>
            </Form.Group>
            <div>Your Answer: {answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
