import "../App.scss";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SuspenseFallback from "./components/Commom/SuspenseFallback";
import { Epath } from "./routes/routerConfig";
import AuthRoute from "./routes/AuthRoute";
import { useDispatch } from "react-redux";
import { getTokenFromLocalStorage } from "../utils/localStorage";
import { handleGetCurrentUser } from "../store/user/handleUser";
import LayoutPrimary from "./components/Layout/LayoutPrimary";
import LayoutDetails from "./components/Layout/LayoutDetails";
import ProductDetailsPage from "./pages/Product/ProductDetailsPage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const TestPage2 = lazy(() => import("./pages/TestPage2"));
const TestPage = lazy(() => import("./pages/TestPage"));
const Layout2 = lazy(() => import("./components/Layout/Layout2"));
const LoginPage = lazy(() => import("./pages/AuthPage/LoginPage"));
const RegisterPage = lazy(() => import("./pages/AuthPage/RegisterPage"));
const ForgotPassPage = lazy(() => import("./pages/AuthPage/ForgotPassPage"));
const ResetPassPage = lazy(() => import("./pages/AuthPage/ResetPassPage"));

function App() {
  // const handleClick = () => {
  //   toast.success("ok", { autoClose: 1000 });
  // };
  // const [openPopup, setOpenPopup] = useState(false);
  // const ref = useRef(null);
  // const openerRef = useRef(null);
  // const handleOutsideClick = () => {
  //   setOpenPopup(false);
  // };

  // useClickOutSide(openerRef, ref, handleOutsideClick);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(handleGetUser());
  // }, []);

  // const res = useSelector((state) => state.user.dataUser);
  // console.log("🚀 ~ App ~ res:", res);
  // const dispatch = useDispatch();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleGetCurrentUser());
  }, [getTokenFromLocalStorage()]);

  return (
    <Suspense fallback={<SuspenseFallback></SuspenseFallback>}>
      <Routes>
        <Route element={<LayoutPrimary></LayoutPrimary>}>
          <Route path={Epath.homePage} element={<HomePage></HomePage>}></Route>
          <Route
            path={Epath.register}
            element={<RegisterPage></RegisterPage>}
          ></Route>
          <Route
            path={Epath.loginPage}
            element={<LoginPage></LoginPage>}
          ></Route>
          <Route
            path={Epath.forgotPass}
            element={<ForgotPassPage></ForgotPassPage>}
          ></Route>
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Route>

        {/* -------------Không Layout------------------------------- */}

        <Route
          path={Epath.resetPass}
          element={<ResetPassPage></ResetPassPage>}
        ></Route>

        {/* ----------------Layout Details---------------------------- */}

        <Route element={<LayoutDetails />}>
          <Route
            path={Epath.productDetails}
            element={<ProductDetailsPage></ProductDetailsPage>}
          ></Route>
          {/* <Route element={<AuthRoute auth={true} isAuthenticated={true} />}>
            <Route path={Epath.testPage2} element={<TestPage2 />} />
          </Route> */}
        </Route>

        <Route element={<Layout2 />}>
          <Route path={Epath.testPage} element={<TestPage></TestPage>}></Route>

          <Route element={<AuthRoute auth={true} isAuthenticated={true} />}>
            <Route path={Epath.testPage2} element={<TestPage2 />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
