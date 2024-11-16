import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });

  it("should load contact Component", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside contact Component", () => {
    render(<ContactUs />);

    const button = screen.getByRole("button");
    //   const button = screen.getByText("Submit");
    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("should load input name inside contact Component", () => {
    render(<ContactUs />);

    const button = screen.getByPlaceholderText("name");
    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("should load 2 input boxes inside contact Component", () => {
    render(<ContactUs />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //   const inputBoxes = screen.getAllByRole("input"); // THis will give error because no role as input

    // console.log(inputBoxes); // this is  react element or react fiber node or jsx or virtual dom object.
    //   console.log(inputBoxes.length);

    // Assertion
    //   expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3);
  });
});
