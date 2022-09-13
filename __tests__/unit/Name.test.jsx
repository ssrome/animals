import React from "react";
import { render, screen } from "@testing-library/react";
import Name from "../../src/components/Name";

describe("Name component", () => {
  it("shows the name of the animal", async () => {
    render(<Name name="Red Panda" />);

    const nameText = screen.getByText(/red panda/i);

    expect(nameText).toBeInTheDocument();
  });
});
