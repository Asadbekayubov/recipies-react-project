import { useRouteError, Link } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <main className="h-screen grid place-content-center text-center">
      <h1 className="text-9xl mb-5">404</h1>
      <p className="mb-8 text-5xl">Page Not Found</p>
      <Link to="/" className="btn btn-primary">Go To Home</Link>
    </main>
  );
}

export default Error;
