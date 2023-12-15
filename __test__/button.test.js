import Button from "src/app/components/Button";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("should render a button element with the given type and buttonname props", () => {
    const wrapper = shallow(<Button type="submit" buttonname="Submit" />);
    expect(wrapper.find("button").prop("type")).toEqual("submit");
    expect(wrapper.find("button").text()).toEqual("Submit");
  });
});
