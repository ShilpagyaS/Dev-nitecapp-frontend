import useNavDetails from "@/Hooks/useNavDetails";
import { setUserRelogin } from "@/store/slices/Auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onlyUnAuthpages } from "./guestRoutes";

export default function UserAuthWrapper({ children }) {
    const { user,firstTimeLogin } = useSelector((state) => state.auth);
    const { path } = useNavDetails()
    const router = useRouter();

    const dispatch = useDispatch();
    const isguestroute =  onlyUnAuthpages.includes(path)
    useEffect(() => {
        if (!Boolean(user) && !isguestroute) {
            const token = localStorage.getItem("nightcpp-token");
            if (token) {
                dispatch(setUserRelogin());
            } else  router.push("/signin")
        } 
        else if (isguestroute && Boolean(user)) {
            if (firstTimeLogin)
                router.push("/signin")
            else router.push("/specs");
        } 
        else if (Boolean(user) && firstTimeLogin) {
            router.push("/signin")
        }

    }, [user]);

    if (isguestroute || Boolean(user) )
        return <>{children}</>
     else return <></>   
}
