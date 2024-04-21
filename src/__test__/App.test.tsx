import { render } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import { store } from "./TestCommon";
describe("App Component", () => {
  test("App Component Render", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
