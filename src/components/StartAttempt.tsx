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

    return (
        <div>
            <Button
                onClick={startAttempt}
                disabled={progress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={endAttempt} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={progress}>
                Mulligan
            </Button>
            <div>Attempts remaining: {attempts}</div>
        </div>
    );
}
