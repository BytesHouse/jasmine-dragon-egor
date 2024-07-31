"use client";

import { useRouter } from "next/navigation";

const NotFound = () => {
  const { push } = useRouter();
  const redirect = setTimeout(() => {
    push("/");
    clearTimeout(redirect);
  }, 3000);

  redirect;
  return (
    <html>
      <body>
        <div className="container">
          <h3>404</h3>
          <h4>Page not found :{"("}</h4>
          <p className="p1">Redirect in 3 seconds</p>
        </div>
      </body>
    </html>
  );
};

export default NotFound;
