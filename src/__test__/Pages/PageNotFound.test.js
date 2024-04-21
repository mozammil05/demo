import { render, screen } from "@testing-library/react";
import PageNotFound from "../../components/pages/PageNotFound/PageNotFound";
import { BrowserRouter as Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
test("Page not Found", async () => {
    render(
        <Routes>
            <PageNotFound />
        </Routes>
    );
    const element = await screen.findByRole("heading", { name: /404/i });
    expect(element).toBeInTheDocument();
    userEvent.click(await screen.findByRole("link", { name: /back to home/i }));
});
