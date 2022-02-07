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
