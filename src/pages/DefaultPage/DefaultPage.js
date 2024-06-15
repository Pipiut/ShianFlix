import Header from "components/Header/Header";
import PageFooter from "components/Footer/PageFooter/PageFooter";
import { Outlet } from "react-router-dom";

function DefaultPage() {
  return (
    <main>
      <Header />
        <Outlet />
      <PageFooter />
    </main>
  );
}

export default DefaultPage;
