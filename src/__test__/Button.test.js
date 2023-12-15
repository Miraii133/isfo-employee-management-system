import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "@/app/components/Button";

describe("Button component", () => {
  it("should render the button with the provided label and style", () => {
    render(<Button type="button" buttonname="Click me" />);

    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-blue-500");
  });

  it("should apply the correct CSS classes to the button element", () => {
    // Arrange
    const type = "button";
    const buttonname = "Click Me";

    // Act
    render(<Button type={type} buttonname={buttonname} />);

    // Assert
    expect(screen.getByRole("button", { name: buttonname })).toHaveClass(
      "bg-blue-500"
    );
    expect(screen.getByRole("button", { name: buttonname })).toHaveClass(
      "hover:bg-blue-700"
    );
    expect(screen.getByRole("button", { name: buttonname })).toHaveClass(
      "text-white"
    );
    expect(screen.getByRole("button", { name: buttonname })).toHaveClass(
      "font-bold"
    );
    expect(screen.getByRole("button", { name: buttonname })).toHaveClass(
      "py-2"
    );
    expect(screen.getByRole("button", { name: buttonname })).toHaveClass(
      "px-4"
    );
    expect(screen.getByRole("button", { name: buttonname })).toHaveClass(
      "rounded"
    );
    expect(screen.getByRole("button", { name: buttonname })).toHaveClass(
      "focus:outline-none"
    );
    expect(screen.getByRole("button", { name: buttonname })).toHaveClass(
      "focus:shadow-outline-blue"
    );
  });
  it("should render a button element with no type or buttonname props", () => {
    // Act
    render(<Button />);

    // Assert
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("should render a button element with a very long buttonname prop", () => {
    // Arrange
    const type = "button";
    const buttonname =
      "This is a very long button name that exceeds the normal length of a button name";

    // Act
    render(<Button type={type} buttonname={buttonname} />);

    // Assert
    expect(
      screen.getByRole("button", { name: buttonname })
    ).toBeInTheDocument();
  });
  it("should render a button element with a non-string buttonname prop", () => {
    // Arrange
    const type = "submit";
    const buttonname = 123;

    // Act
    render(<Button type={type} buttonname={buttonname} />);

    // Assert
    expect(
      screen.getByRole("button", { name: String(buttonname) })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: String(buttonname) })
    ).toHaveAttribute("type", type);
  });
});
