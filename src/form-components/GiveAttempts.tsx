import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestAttempts, setRequestAttempts] = useState<number>(0);

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>
                <Form.Group controlId="formAttempts">
                    <Form.Control
                        style={{
                            width: "200px",
                            textAlign: "center",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                        type="number"
                        value={requestAttempts}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setRequestAttempts(
                                parseInt(event.target.value) | 0,
                            );
                        }}
                    />
                </Form.Group>
            </div>
            <span>
                <Button
                    onClick={() => {
                        setAttemptsLeft(attemptsLeft + requestAttempts);
                    }}
                >
                    Gain
                </Button>
                <Button
                    onClick={() => {
                        setAttemptsLeft(attemptsLeft - 1);
                    }}
                    disabled={attemptsLeft === 0}
                >
                    Use
                </Button>
            </span>
            <div>Attempts Remaining: {attemptsLeft}</div>
        </div>
    );
}
