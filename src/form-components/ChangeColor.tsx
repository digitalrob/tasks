import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const Colors = [
        "red",
        "green",
        "blue",
        "pink",
        "purple",
        "black",
        "yellow",
        "white"
    ];
    const default_Color = Colors[0];
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    const [color, setColor] = useState<string>(default_Color);
    function ChangeColor(event: ChangeEvent) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {Colors.map((currentColor: string) => (
                    <Form.Check
                        inline
                        key={currentColor}
                        name="colors"
                        type="radio"
                        label={currentColor}
                        value={currentColor}
                        id="Color-options"
                        onChange={ChangeColor}
                        style={{ backgroundColor: currentColor }}
                    ></Form.Check>
                ))}
            </div>
            <div>
                You have selected
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}.
                </span>
            </div>
        </div>
    );
}
