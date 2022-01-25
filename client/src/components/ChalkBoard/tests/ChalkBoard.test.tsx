import { render, screen } from "@testing-library/react";
import ChalkBoard from "../ChalkBoard";

test("Chalkboard contains text", () => {
    const element = <ChalkBoard text="butt" />
    render(element);
    expect(
        screen.getByTestId('chalkboard'),
    ).toBeInTheDocument()
});