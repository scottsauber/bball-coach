import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("entering player name and clicking add button should add new players", () => {
    const playerName = "Player 1";

    addPlayerFlow(playerName);

    const playerOne = screen.getByText(playerName) as HTMLLIElement;
    expect(playerOne).toBeInTheDocument();
});

test("clicking add button should clear player name textbox", () => {
    const playerName = "Player 1";

    addPlayerFlow(playerName);

    const nameTextbox = screen.getByLabelText("Player Name") as HTMLInputElement;
    expect(nameTextbox.value).toBe("");
});

const addPlayerFlow = (playerName: string) => {
    render(<App />);
    const nameTextbox = screen.getByLabelText("Player Name") as HTMLInputElement;
    userEvent.type(nameTextbox, playerName);
    const addButton = screen.getByRole("button", { name: /Add Player/i }) as HTMLButtonElement;

    userEvent.click(addButton);
};
