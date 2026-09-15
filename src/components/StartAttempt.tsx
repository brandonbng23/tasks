import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [progress, setProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    function startAttempt(): void {
        setProgress(true);
        setAttempts(attempts - 1);
    }

    function endAttempt(): void {
        setProgress(false);
    }

    function mulligan(): void {
        setAttempts(attempts + 1);
    }

    function disabled(): void {
        return;
    }

    return (
        <div>
            <Button
                onClick={!progress && attempts > 0 ? startAttempt : disabled}
            >
                Start Quiz
            </Button>
            <Button onClick={progress ? endAttempt : disabled}>
                Stop Quiz
            </Button>
            <Button onClick={!progress ? mulligan : disabled}>Mulligan</Button>
            <div>{attempts}</div>
        </div>
    );
}
