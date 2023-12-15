import Button from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("should render a button element with the given type and buttonname props", () => {
    const { getByRole } = render(<Button type="submit" buttonname="Submit" />);
    const buttonElement = getByRole("button");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute("type", "submit");
    expect(buttonElement).toHaveTextContent("Submit");
  });
});
