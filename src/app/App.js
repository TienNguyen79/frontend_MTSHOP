import "../App.scss";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SuspenseFallback from "./components/Commom/SuspenseFallback";
import { Epath } from "./routes/routerConfig";
import AuthRoute from "./routes/AuthRoute";
import { useDispatch } from "react-redux";
import { getTokenFromLocalStorage } from "../utils/localStorage";
import { handleGetCurrentUser } from "../store/user/handleUser";
import NewsPage from "./pages/News/NewsPage";
import NewsDetailsPage from "./pages/News/NewsDetailsPage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const TestPage2 = lazy(() => import("./pages/TestPage2"));
const TestPage = lazy(() => import("./pages/TestPage"));
const Layout2 = lazy(() => import("./components/Layout/Layout2"));
const LoginPage = lazy(() => import("./pages/AuthPage/LoginPage"));
const RegisterPage = lazy(() => import("./pages/AuthPage/RegisterPage"));
const ForgotPassPage = lazy(() => import("./pages/AuthPage/ForgotPassPage"));
const ResetPassPage = lazy(() => import("./pages/AuthPage/ResetPassPage"));
const CombineProductsPage = lazy(() =>
  import("./pages/Product/CombineProductsPage")
);
const ProductDetailsPage = lazy(() =>
  import("./pages/Product/ProductDetailsPage")
);
const LayoutDetails = lazy(() => import("./components/Layout/LayoutDetails"));
const LayoutPrimary = lazy(() => import("./components/Layout/LayoutPrimary"));
const ShoppingPage = lazy(() => import("./pages/ShoppingPage"));

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
          <Route
            path={Epath.productsCombine}
            element={<CombineProductsPage></CombineProductsPage>}
          ></Route>
          <Route
            path={Epath.shopping}
            element={<ShoppingPage></ShoppingPage>}
          ></Route>

          <Route path={Epath.news} element={<NewsPage></NewsPage>}></Route>
          <Route
            path={Epath.newsDetail}
            element={<NewsDetailsPage></NewsDetailsPage>}
          ></Route>
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
