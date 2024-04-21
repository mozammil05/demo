import { render, screen } from "@testing-library/react";
import LoginPage from "../../components/pages/LoginPage/LoginPage";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import ConnectWalletBox from "../../components/common/ConnectWalletBox/ConnectWalletBox";
import { store, validateEmail } from "../TestCommon";
import { Provider } from "react-redux";
import ConnectWallet from "../../components/common/Modals/ConnectWallet/ConnectWallet";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const linkText = "Learn More";

// describe("Login Page", () => {
beforeAll(() => {
  jest.useFakeTimers()
})

afterAll(() => {
  jest.useRealTimers()
})
test("renders an anchor tag with the correct text and href", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    </Provider>
  );
  // Testing navigating using the button
  const linkElement = await screen.findByRole("link", { name: linkText });
  expect(linkElement).toBeInTheDocument();

  userEvent.click(linkElement);
  // expect(mockedUsedNavigate).toHaveBeenCalledWith("/learn-more");
});

test("should failed on email validation", () => {
  const testEmail = "amit.antiersolutions.com";
  expect(validateEmail(testEmail)).not.toBe(true);
});
test("email input field should accept email", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <ConnectWalletBox />
      </BrowserRouter>
    </Provider>
  );
  const email = screen.getByPlaceholderText(/enter your email \(optional\)/i);
  userEvent.type(email, "amit@gmail.com");
  expect(email.value).toMatch("amit@gmail.com");
  const ConnectWalletButtonClick = screen.getByRole("button", {
    name: /connect wallet/i,
  });
  expect(ConnectWalletButtonClick).toBeInTheDocument();
  // await waitFor(() => {
  userEvent.click(ConnectWalletButtonClick);
  // });
});
// });

test("ConnectWalletBox Components", async () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ConnectWallet show={true} handleClose={true} />
      </Provider>
    </BrowserRouter>
  );

  //   await waitFor(() => {
  const linkElement = screen.getByRole("tab", { name: /metamask/i });
  expect(linkElement).toBeInTheDocument();
  userEvent.click(linkElement);
  // expect(mockedUsedNavigate).toHaveBeenCalledWith("/auth");
  //   });
});