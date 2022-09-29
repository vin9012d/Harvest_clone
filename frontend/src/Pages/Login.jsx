import React, { useEffect } from "react";

export const Login = () => {
  useEffect(() => {
    document.title = "Sign in";
  }, []);

  return <div>Login</div>;
};
