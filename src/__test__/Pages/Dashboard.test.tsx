import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Dashboard from "../../components/pages/Dashboard/Dashboard";
import { store } from "../TestCommon";
import { BrowserRouter as Routes } from "react-router-dom";
import React from "react";
test("Dashboard Page", async () => {
  render(
    <Routes>
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </Routes>
  );
  const element = await screen.findByRole("heading", { name: /trading desk/i });
  expect(element).toBeInTheDocument();
});