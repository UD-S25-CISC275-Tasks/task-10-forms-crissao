import React, { useState } from "react";
import {Form} from "react-bootstrap"

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-red"
                    label={<span style={{ backgroundColor: "red" }}>red</span>}
                    value="red"
                    checked={color === "red"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-orange"
                    label={
                        <span style={{ backgroundColor: "orange" }}>
                            orange
                        </span>
                    }
                    value="orange"
                    checked={color === "orange"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-yellow"
                    label={
                        <span style={{ backgroundColor: "yellow" }}>
                            yellow
                        </span>
                    }
                    value="yellow"
                    checked={color === "yellow"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-green"
                    label={
                        <span
                            style={{ color: "white", backgroundColor: "green" }}
                        >
                            green
                        </span>
                    }
                    value="green"
                    checked={color === "green"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-blue"
                    label={
                        <span
                            style={{ color: "white", backgroundColor: "blue" }}
                        >
                            blue
                        </span>
                    }
                    value="blue"
                    checked={color === "blue"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-indigo"
                    label={
                        <span
                            style={{
                                color: "white",
                                backgroundColor: "indigo",
                            }}
                        >
                            indigo
                        </span>
                    }
                    value="indigo"
                    checked={color === "indigo"}
                />{" "}
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-violet"
                    label={
                        <span style={{ backgroundColor: "violet" }}>
                            violet
                        </span>
                    }
                    value="violet"
                    checked={color === "violet"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-pink"
                    label={
                        <span style={{ backgroundColor: "pink" }}>pink</span>
                    }
                    value="pink"
                    checked={color === "pink"}
                />
                <div>
                    You have chosen <span data-testid = "colored-box" style={{backgroundColor: color}}>{color}</span>.
                </div>
            </div>
        </div>
    );
}