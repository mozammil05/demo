import { render, screen } from "@testing-library/react"
import GovernancePage from "../../components/pages/GovernancePage/GovernancePage"
import React from "react"

test("Governance Page", async () => {
    render(<GovernancePage />)
    const element = screen.getByRole('heading', { name: /liberty finance governance/i })
    expect(element).toBeInTheDocument();
})