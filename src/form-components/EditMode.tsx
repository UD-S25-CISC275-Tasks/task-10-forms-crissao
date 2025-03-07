import React, { useState } from "react";
import {Form} from "react-bootstrap"

export function EditMode(): React.JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                style={{
                    width: "10px",
                    textAlign: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
                type="switch"
                id="is-editing-check"
                label="Edit"
                checked={editing}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEditing(event.target.checked);
                }}
            />
            <span>
                {editing && (
                    <div>
                        <Form.Check
                            style={{
                                width: "10px",
                                textAlign: "center",
                                marginLeft: "auto",
                                marginRight: "auto",
                            }}
                            type="checkbox"
                            id="is-student"
                            label="Student"
                            checked={student}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setStudent(event.target.checked);
                            }}
                        />
                        <Form.Group controlId="formName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                style={{
                                    width: "200px",
                                    textAlign: "center",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                }}
                                value={name}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>,
                                ) => {
                                    setName(event.target.value);
                                }}
                            />
                        </Form.Group>
                    </div>
                )}
            </span>
            <span>
                {!editing && (
                    <span>
                        {student && <div>{name} is a student</div>}
                        {!student && <div>{name} is not a student</div>}
                    </span>
                )}
            </span>
        </div>
    );
}
