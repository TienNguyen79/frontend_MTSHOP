//đang lỗi

import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Epath } from "./routerConfig";
import { lazy, Fragment } from "react";
import Layout from "../components/Layout/Layout";
import Layout2 from "../components/Layout/Layout2";
import LoginPage from "../pages/AuthPage/LoginPage";
const RenderRoutes = ({ routes, isAuthenticated }) => {
  // isAuthenticated = useSelector((state: RootState) => state.authSlice.isAuthenticated);
  const navigate = useNavigate();
  isAuthenticated = false;

  return (
    <Routes>
      {routes.map((route, i) => {
        console.log("🚀 ~ {routes.map ~ route.auth:", route.auth);
        console.log("🚀 ~ {routes.map ~ isAuthenticated:", isAuthenticated);
        let LayoutRoute = route.layout || Fragment;
        if (!LayoutRoute) {
          LayoutRoute = ({ children }) => <>{children}</>;
        }
        const Component = route.component || <div />;

        if (route.auth && !isAuthenticated) {
          navigate(Epath.loginPage);
          return null;
        }

        return (
          <Route
            key={i}
            path={route.path}
            exact={!!route.exact}
            element={
              <>
                {route.routes ? (
                  <LayoutRoute>
                    <RenderRoutes
                      routes={route.routes}
                      isAuthenticated={isAuthenticated}
                    />
                  </LayoutRoute>
                ) : (
                  <Component />
                )}
              </>
            }
          />
        );
      })}
    </Routes>
  );
};

export const routes = [
  {
    exact: true,
    path: Epath.notFoundPage,
    component: lazy(() => import("../pages/NotFoundPage")),
  },
  {
    exact: true,
    path: Epath.loginPage,
    component: lazy(() => import("../pages/AuthPage/LoginPage")),
    auth: false,
  },

  {
    path: "*",
    layout: Layout,
    routes: [
      {
        exact: true,
        path: Epath.homePage,
        component: lazy(() => import("../pages/HomePage/HomePage")),
        auth: false,
      },
      {
        exact: true,
        path: Epath.testPage,
        component: lazy(() => import("../pages/TestPage")),
        auth: false,
      },
      {
        exact: true,
        path: Epath.testPage2,
        component: lazy(() => import("../pages/TestPage2")),
        auth: true,
      },
      {
        path: "*",
        component: () => <Navigate to={Epath.notFoundPage} />,
      },
    ],
  },
];

export default RenderRoutes;
