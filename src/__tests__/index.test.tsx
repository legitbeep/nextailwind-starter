import { render, screen } from "@testing-library/react";

import Home from "pages/index";

describe("Home", () => {
  it("renders a heading with some text", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /nextailwind-starter/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
