import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./Redux/store";
import LoaderComponent from "./components/common/LoaderComponent/LoaderComponent";


import ComingSoonPage from "./components/common/ErrorScreens/ComingSoonPage/ComingSoonPage";
import Dashboard from "./components/pages/Dashboard/Dashboard";


const AuthLayout = lazy(
  () => import("./components/layouts/AuthLayout/AuthLayout")
);
const LoginPage = lazy(() => import("./components/pages/LoginPage/LoginPage"));
const PageNotFound = lazy(
  () => import("./components/pages/PageNotFound/PageNotFound")
);
const EarnPage = lazy(() => import("./components/pages/EarnPage/EarnPage"));
const GovernancePage = lazy(
  () => import("./components/pages/GovernancePage/GovernancePage")
);
const PortfolioPage = lazy(
  () => import("./components/pages/PortfolioPage/PortfolioPage")
);





function App() {
  let persistor = persistStore(store);
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Suspense>
            <BrowserRouter>
              <Routes>
                <Route path="auth" element={<AuthLayout />}>
                  <Route
                    index
                    element={
                      <Suspense fallback={<LoaderComponent />}>
                        <Dashboard />
                      </Suspense>
                    }
                  />
                  <Route
                    path="earn"
                    element={
                      <Suspense fallback={<LoaderComponent />}>
                        <EarnPage />
                      </Suspense>
                    }
                  />
                  <Route
                    path="portfolio"
                    element={
                      <Suspense fallback={<LoaderComponent />}>
                        <ComingSoonPage />
                      </Suspense>
                    }
                  />
                  <Route
                    path="governance"
                    element={
                      <Suspense fallback={<LoaderComponent />}>
                        <ComingSoonPage />
                      </Suspense>
                    }
                  />
                  <Route
                    path="analytics"
                    element={
                      <Suspense fallback={<LoaderComponent />}>
                        <ComingSoonPage />
                      </Suspense>
                    }
                  />
                  <Route
                    path="education"
                    element={
                      <Suspense fallback={<LoaderComponent />}>
                        <ComingSoonPage />
                      </Suspense>
                    }
                  />
                  <Route
                    path="support"
                    element={
                      <Suspense fallback={<LoaderComponent />}>
                        <ComingSoonPage />
                      </Suspense>
                    }
                  />
                  <Route path="*" element={<PageNotFound />} />
                </Route>
                <Route path="">
                  <Route index element={<LoginPage />} />
                  <Route path="*" element={<PageNotFound />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </Suspense>
        </PersistGate>
      </Provider>
    </>
  );
}
export const storeInstance = store;
export default App;
