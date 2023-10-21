import { render, screen } from "@testing-library/react";
import Home from "../../pages/index";

describe("Home", () => {
  it("renders a HomePage", () => {
    render(<Home />);

    const element = screen.getByText("Index");
    expect(element).toHaveClass("test");
  });
});
