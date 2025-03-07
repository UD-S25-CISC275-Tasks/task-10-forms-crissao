import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);

    function selectAnswer(event: React.ChangeEvent<HTMLSelectElement>){
        setChoice(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multiplechoice">
                <Form.Label>What is the correct answer?</Form.Label>
                <Form.Select
                    style={{
                        width: "200px",
                        textAlign: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                    value={choice}
                    onChange={selectAnswer}
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {choice === expectedAnswer && <div>✔️</div>}
            {choice !== expectedAnswer && <div>❌</div>}
        </div>
    );
}
