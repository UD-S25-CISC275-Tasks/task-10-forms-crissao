import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>): void {
        setUserAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control style={{width: "200px", textAlign: "center", marginLeft: "auto", marginRight: "auto"}} value={userAnswer} onChange={updateAnswer} />
            </Form.Group>
            <div> {userAnswer === expectedAnswer && <span>✔️</span>}</div>
            <div> {userAnswer !== expectedAnswer && <span>❌</span>}</div>
        </div>
    );
}
