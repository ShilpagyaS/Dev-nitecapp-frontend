import useNavDetails from "@/Hooks/useNavDetails";
import { setUserRelogin } from "@/store/slices/Auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onlyUnAuthpages } from "./guestRoutes";

export default function AuthWrapper({ children }) {
  const { user } = useSelector((state) => state.auth);
  const { path } = useNavDetails()
  const router = useRouter();

  const dispatch = useDispatch();
  useEffect(() => {
    if (!Boolean(user)) {
      const token = localStorage.getItem("nightcpp-token");
      if (token) {
        dispatch(setUserRelogin());
      } else router.push("/signin");
    }

    if (onlyUnAuthpages.includes(path) && Boolean(user)) {
      router.push("/specs");
    }
  }, [user]);
  if (onlyUnAuthpages.includes(path))
    return <>{children}</>
  else
    return Boolean(user) ? <>{children}</> : <></>;
}
