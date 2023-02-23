import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function AuthWrapper({ children }) {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!Boolean(user)) router.push("/signin");
  }, [user]);

  return Boolean(user) ? <>{children}</> : <></>;
}
