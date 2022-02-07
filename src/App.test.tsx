import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("entering player name and clicking add button should add new players", () => {
    render(<App />);
    const nameTextbox = screen.getByLabelText("Player Name");
    const playerName = "Player 1";
    userEvent.type(nameTextbox, playerName);
    const addButton = screen.getByRole("button", { name: /Add Player/i });

    userEvent.click(addButton);

    const playerOne = screen.getByText(playerName);
    expect(playerOne).toBeInTheDocument();
});

test("clicking add button should clear player name textbox", () => {
    render(<App />);
    const nameTextbox = screen.getByLabelText(
        "Player Name"
    ) as HTMLInputElement;
    const playerName = "Player 1";
    userEvent.type(nameTextbox, playerName);
    const addButton = screen.getByRole("button", { name: /Add Player/i });

    userEvent.click(addButton);

    expect(nameTextbox.value).toBe("");
});
