import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import Home from "./pages/Home";
import AdminHome from "./pages/admin/AdminHome";
import Monitoring from "./pages/admin/Monitoring";
import Users from "./pages/admin/Users";
import Subscription from "./pages/admin/Subscription";
import Spaces from "./pages/admin/Spaces";
import Complaints from "./pages/admin/Complaints";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminHome />,
      },
    ],
  },
  {
    path: "/monitoring",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Monitoring />,
      },
    ],
  },
  {
    path: "/users",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Users />,
      },
    ],
  },
  {
    path: "/subscription",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Subscription />,
      },
    ],
  },
  {
    path: "/spaces",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Spaces />,
      },
    ],
  },
  {
    path: "/complaints",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Complaints />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
