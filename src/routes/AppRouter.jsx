import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsConditions />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
