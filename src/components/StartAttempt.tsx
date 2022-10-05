import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [value, setValue] = useState<number>(4);
    const [start, setStart] = useState<boolean>(false);
    function startButton(): void {
        setValue(value - 1);
        setStart(true);
    }

    return (
        <span>
            {value}
            <Button onClick={startButton} disabled={start || value === 0}>
                Start Quiz
            </Button>
            <Button onClick={() => setStart(false)} disabled={!start}>
                Stop Quiz
            </Button>
            <Button onClick={() => setValue(value + 1)} disabled={start}>
                Mulligan
            </Button>
        </span>
    );
}
