import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputTextField from "@/app/components/InputTextField";

describe("InputTextField component", () => {
  it("should apply border, rounded corners, padding and width styles to input field", () => {
    // Arrange
    const name = "testName";
    const placeholder = "testPlaceholder";
    const onChange = jest.fn();

    // Act
    render(
      <InputTextField
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    );

    // Assert
    expect(screen.getByRole("textbox")).toHaveClass(
      "border-2 rounded-md p-2 w-[20rem] focus:outline-none focus:border-black"
    );
  });
  it("should update input field value on user input", () => {
    // Arrange
    const name = "testName";
    const placeholder = "testPlaceholder";
    const onChange = jest.fn();

    // Act
    render(
      <InputTextField
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "testValue" },
    });

    // Assert
    expect(screen.getByRole("textbox")).toHaveValue("testValue");
  });
  it("should render input field with empty name and placeholder", () => {
    // Arrange
    const onChange = jest.fn();

    // Act
    render(<InputTextField name="" placeholder="" onChange={onChange} />);

    // Assert
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveAttribute("name", "");
    expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "");
  });
  it("should render input field with empty placeholder and onChange function", () => {
    // Arrange
    const name = "testName";
    const onChange = jest.fn();

    // Act
    render(<InputTextField name={name} placeholder="" onChange={onChange} />);

    // Assert
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveAttribute("name", name);
    expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "");
  });

  it("should render an input field with non-string name, placeholder and onChange function", () => {
    // Arrange
    const name = 123;
    const placeholder = 456;
    const onChange = jest.fn();

    // Act
    render(
      <InputTextField
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    );

    // Assert
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveAttribute("name", "123");
    expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "456");
    expect(screen.getByRole("textbox")).toHaveAttribute("type", "text");
    expect(screen.getByRole("textbox")).toHaveClass(
      "border-2 rounded-md p-2 w-[20rem] focus:outline-none focus:border-black"
    );
  });
});
