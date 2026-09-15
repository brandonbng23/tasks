import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Create a Vacuum Day"
    | "Sock Monkey Day"
    | "International Pickle Week"
    | "Bad Poetry Day"
    | "National Dogs in Politics Day";

// Current -> Next
const ALPHABETICAL: Record<Holiday, Holiday> = {
    "Bad Poetry Day": "Create a Vacuum Day",
    "Create a Vacuum Day": "International Pickle Week",
    "International Pickle Week": "National Dogs in Politics Day",
    "National Dogs in Politics Day": "Sock Monkey Day",
    "Sock Monkey Day": "Bad Poetry Day",
};

// Current -> Next
const CHRONOLOGICAL: Record<Holiday, Holiday> = {
    "Create a Vacuum Day": "Sock Monkey Day",
    "Sock Monkey Day": "International Pickle Week",
    "International Pickle Week": "Bad Poetry Day",
    "Bad Poetry Day": "National Dogs in Politics Day",
    "National Dogs in Politics Day": "Create a Vacuum Day",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>(
        "International Pickle Week",
    );

    function cycleAlphabetically(): void {
        const nextHoliday = ALPHABETICAL[holiday];
        setHoliday(nextHoliday);
    }

    function cycleChronologically(): void {
        const nextHoliday = CHRONOLOGICAL[holiday];
        setHoliday(nextHoliday);
    }

    return (
        <div>
            <Button onClick={cycleAlphabetically}>
                Advance Alphabetically
            </Button>

            <Button onClick={cycleChronologically}>Advance by Year</Button>
            <div>
                {holiday === "Bad Poetry Day" ?
                    <span>Holiday: 🪶</span>
                : holiday === "Create a Vacuum Day" ?
                    <span>Holiday: 🧹</span>
                : holiday === "International Pickle Week" ?
                    <span>Holiday: 🥒</span>
                : holiday === "National Dogs in Politics Day" ?
                    <span>Holiday: 🐕</span>
                :   <span>Holiday: 🧦</span>}
            </div>
        </div>
    );
}
