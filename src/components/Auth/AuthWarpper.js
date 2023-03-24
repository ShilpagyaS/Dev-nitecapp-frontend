import { setUserRelogin } from "@/store/slices/Auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AuthWrapper({ children }) {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!Boolean(user)) {
      const token = localStorage.getItem("nightcpp-token");
      if (token) {
        dispatch(setUserRelogin());
      } else router.push("/signin");
    }
  }, [user]);
  return Boolean(user) ? <>{children}</> : <></>;
}
