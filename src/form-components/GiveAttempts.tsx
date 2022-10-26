import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemps, setattempse] = useState<number>(3);
    const [reAttemps, setreAttemps] = useState<string>("0");
    const intrequriedattemps = parseInt(reAttemps) || 0;
    return (
        <div>
            <h3>Give Attempts</h3>
            Attempts Left: {attemps}
            <Form.Group>
                <Form.Control
                    type="number"
                    value={reAttemps}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setreAttemps(event.target.value)
                    }
                />
            </Form.Group>
            <Button
                onClick={() => setattempse(attemps - 1)}
                disabled={attemps == 0}
            >
                use
            </Button>
            <Button onClick={() => setattempse(attemps + intrequriedattemps)}>
                gain
            </Button>
        </div>
    );
}
