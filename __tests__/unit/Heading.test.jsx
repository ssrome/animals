import React from "react";
import { render, screen } from "@testing-library/react";
import Heading from "../../src/components/Heading";

describe("Heading component", () => {
  it("loads the page heading", async () => {
    render(<Heading />);
    //const headingText = screen.getByText(/Random Animals/);
    const headingText = screen.getByRole("heading", {
      name: /random animals/i,
    });

    expect(headingText).toBeInTheDocument();
  });
});
