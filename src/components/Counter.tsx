import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <span>
            <Button onClick={() => setValue(1 + value)}>Add One</Button>
            <Button onClick={() => setValue(value - 1)}>Minus One</Button>
            to {value}.
        </span>
    );
}
