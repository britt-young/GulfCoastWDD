import ErrorHeader from "./ErrorHeader"
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden">
      <ErrorHeader />
    <div className="pt-24 flex flex-col min-h-dvh bg-white dark:bg-dark dark:text-white items-center">
      <h2 className="lg:px-0 text-center">404 | Page Not Found</h2>
      <br />
      <button onClick={() => navigate("/")} className="mx-auto">
        Go back to homepage
      </button>
    </div>
    </section>
  );
};

export default Error;
