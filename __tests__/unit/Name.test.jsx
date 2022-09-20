import React from "react";
import { render, screen } from "@testing-library/react";
import Name from "../../src/components/Name";

describe("Name component", () => {
  beforeEach(() => {
    render(<Name name="Plains Zebra" latinName="Equus quagga" />);
  });
  it("shows the name of the animal", async () => {
    const nameText = screen.getByText(/plains zebra/i);

    expect(nameText).toBeInTheDocument();
  });

  it("shows the latin name", async () => {
    const latinText = screen.getByText(/equus quagga/i);

    expect(latinText).toBeInTheDocument();
  });
});
