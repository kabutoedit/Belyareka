import { Helmet } from "react-helmet";
import { useEffect, type FC } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import SecondaryFooter from "components/SecondaryFooter";
import Nav from "components/Nav";
import { AppDispatch } from "store/index";
import { getCatalog } from "store/slices/catalogSlices";

const TheProgenitorLayout: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCatalog());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Белая река</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes" />
        <meta name="theme-color" content="#00afef" />
      </Helmet>
      <main className="overflow-hidden">
        <Nav />
        <div className="min-h-dvh">
          <Outlet />
        </div>
        <SecondaryFooter />
      </main>
    </>
  );
};
export default TheProgenitorLayout;
