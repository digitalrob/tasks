import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    const [editMode, setEditMode] = useState<boolean>(false);
    const [text, setText] = useState<string>("Your Name");
    const [status, setStatus] = useState<boolean>(true);

    function Changetext(event: ChangeEvent) {
        setText(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    inline
                    type="switch"
                    id="editMode-check"
                    label="edit Mode"
                    checked={editMode}
                    onChange={() => setEditMode(!editMode)}
                />
                {editMode && (
                    <Form.Check
                        inline
                        type="switch"
                        id="status-check-student"
                        label="student"
                        checked={status}
                        onChange={() => setStatus(!status)}
                    />
                )}
            </div>
            <div>
                {editMode && (
                    <Form.Group controlId="formStudentName">
                        <Form.Label>Enter Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={text}
                            onChange={Changetext}
                        ></Form.Control>
                    </Form.Group>
                )}
            </div>
            <div>
                {text} {status ? "is" : "is not"} {"a student"}
            </div>
        </div>
    );
}
