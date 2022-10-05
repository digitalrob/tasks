import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("Chinese New Year");
    function changeAlphabet(): void {
        if (holiday === "Chinese New Year") {
            setHoliday("Christmas");
        } else if (holiday === "Christmas") {
            setHoliday("Easter");
        } else if (holiday === "Easter") {
            setHoliday("Fourth of July");
        } else if (holiday === "Fourth of July") {
            setHoliday("Halloween");
        } else {
            setHoliday("Chinese New Year");
        }
    }
    function changeYear() {
        if (holiday === "Chinese New Year") {
            setHoliday("Easter");
        } else if (holiday === "Easter") {
            setHoliday("Fourth of July");
        } else if (holiday === "Fourth of July") {
            setHoliday("Halloween");
        } else if (holiday === "Halloween") {
            setHoliday("Christmas");
        } else {
            setHoliday("Chinese New Year");
        }
    }
    function emojis(): string {
        if (holiday === "Halloween") {
            return "🎃";
        } else if (holiday === "Chinese New Year") {
            return "🐲";
        } else if (holiday === "Christmas") {
            return "🎄";
        } else if (holiday === "Easter") {
            return "🐰";
        } else {
            return "🎆";
        }
    }
    return (
        <div>
            Holiday: {emojis()} {holiday}
            <Button onClick={() => changeAlphabet()}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => changeYear()}>Advance by Year</Button>
        </div>
    );
}
