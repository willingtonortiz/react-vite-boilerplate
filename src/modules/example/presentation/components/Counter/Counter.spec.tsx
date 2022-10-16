import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Counter } from "./Counter";

describe("first", () => {
  it("Should render normally", () => {
    // Arrange
    const { container } = render(<Counter />);

    // Assert
    expect(container).toBeInTheDocument();
  });

  it("Should increment the counter on button click", async () => {
    // Arrange
    render(<Counter />);

    // Act
    await userEvent.click(screen.getByRole("button", { name: "Increment" }));

    // Assert
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("1");
  });

  it("Should decrement the counter on button click", async () => {
    // Arrange
    render(<Counter />);

    // Act
    await userEvent.click(screen.getByRole("button", { name: "Decrement" }));

    // Assert
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("-1");
  });
});
